import { buffer } from "micro";
import * as admin from "firebase-admin";
import getRawBody from 'raw-body';

const serviceAccount = {
  // Your service account details
}

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = 'whsec_IFSk0puk8kuHyU3Mt2GxkIqYDflHO0oX';

const fulfillOrder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: (session.amount_total / 100) * 10000,
      amount_shipping: (session.total_details.amount_shipping / 100) * 10000,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(console.log(`Order Success ${session.id}`));
};

const handleEvent = async (event) => {
  switch (event.type) {
    case 'payment_intent.succeeded':
      // Handle successful payment
      const session = event.data.object;
      await fulfillOrder(session);
      break;
    case 'payment_intent.payment_failed':
      // Handle failed payment
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const rawBody = await getRawBody(req);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    await handleEvent(event);

    res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
