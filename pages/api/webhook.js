import { buffer } from "micro";
import * as admin from "firebase-admin";
import getRawBody from "raw-body";
const serviceAccount = {
  "type": "service_account",
  "project_id": "chiquechick-165de",
  "private_key_id": "d6769cb4a3329b9ea9428ba48bfd87ca486a8347",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCssMG0KMxE7WQv\naWC373aRmbfFG4/QPJnitkoWpqwwA5r0AasuUou7nzXhg3OWHHJCIKBFv/Uc+N7J\nuV7N7iVlTALk8R5JOukV/wKJMmaavPVe5kaHyonNU6NW4VcNlGVKS59kWx2umqOF\nU2VzeFcyiMgxTBlcQTDyTVVahfdGY0du/pnoPWAOsQwhyOr+VodF6zMivjactByN\nzj7PCjCogzOuE0k8NemhO5sdi62MbKjjUg+OPTY07zBlWF4ry0WISlPu7eacOqcR\nVERCpJD3aQhFO1cHFwn3sR8G1EQ7bvKaMXu7HrB2/GM1pkVi4vZNIf+I7SBoOPna\nAFmESYehAgMBAAECggEAIGvO8hP2xboL5RrTnbTHfe5uIgNarK2z9mxi3H3ONfV3\nUfg+OyQkN8VcSEp1mOkeSmv1qyKu0hGnQhgbRG5BdxMeN/1MwlLdD9QglcFwofx3\n1KlG9JeB55qcP+NuhI4nthscgarZl75QlOdjVJpzRHmJnDe9SySyG8uJCsW79uq9\npachNG9RBFktwRQqqrBFRpeDBmy7oEvEeNkcgBaZva5Kf9mBD+vCBYGIc/yYRL/z\nfw1SVPvHZUOvgEej4EJATZsXjtDipR/AQHqlF8mV40r9s6mnzrZ0h4hqfHEzWK1K\ncxh0vHsmOAGsaZxjuCFGV6osH5McON4ocIBQA1JLAQKBgQDcPmRcSNXkpaNt0wwr\n9ofBAvVKRl6NZicauODhjBJUV6EnAE5Ky4PoPnm8LvBs3GksFn8JnM4+yo/fEz3Y\n7tALLCR1sbv3A2r+hjuNqzTP/MvZ88cEZut7+lq4r2m8gGxQrCiiaz3l/Eu0YReR\nWbQCrZa7T2TWL9L830W7N/bazQKBgQDIuf2ilWgI0QnpqZQ4kBGwJbtzuRdhCR9i\nRtRJGKAaeqlJTiTZoAiE2tw2XrBNpIYlRKa3/x8lVYCCLKuUDeo9BrA/PVovuLg+\nV++mj86tvFfqxHwS3iArKQLMxgdUl2Bx+/S2QTudzhV1q214BRWu3B7+x10Zs1r5\nraWijNuIJQKBgBVOY98ZnLeV3o2NUSwfmVpustQQoq0DKN1I7VhkeJF4OLrRKMHL\nlmMtSBGQaOnfGL2PH5MKfFlOt0RZVC5cS/wItS49l3V5+yvMSI6X9W/5gK8BCku+\nuSExQv2C2rPFqLTVMskjnsVU9u3oRqNlDikEKgTM1XBzB/I2l0RZUaQxAoGAB/jz\nLQD4J9l9pk04+OIoAbIN9vO0DQOavoGHrvuOaF7U2HeFGSu1CunSc0phgEP3nAVV\nBdvZNddmikUR74h59ECOwYRDT7/reXZuq1Ps5pOjfkydjPZLmss/NDjtU5vLldtn\nBdIjdwoXahwL9gdlrBNMG9x5QysPgvk1qfYkRg0CgYBnm0ccoUbzzB+lcCfxZXy9\nYyNsHXujsMu7NMgy2kOw8WCWOmFZGMTt4SPq+RHKSrAqe1h9LK5QKcf8YIG24Xye\nGnPKT87uT4Fv45fYYve+ZlxXTg5OnnUmR76mfRK/sYGL4kGVe3d0Tft07BZJd2TX\n0QTsEFngVBCPwipNWvBrzw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-vzq0w@chiquechick-165de.iam.gserviceaccount.com",
  "client_id": "104334536562120470922",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vzq0w%40chiquechick-165de.iam.gserviceaccount.com"
}
const rawBody = await getRawBody(req);
const fullFillOrder = async (session) => {
  console.log("Full fill order", session);

  try {
    await app
      .firestore()
      .collection("users")
      .doc(session.metadata.email)
      .collection("orders")
      .doc(session.id)
      .set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100 || 30,
        images: JSON.parse(session.metadata.images),
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });

    console.log(`Success: order ${session.id} has been added to the DB`);
  } catch (err) {
    console.log("Error during insertion!", err.message);
  }
};

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const requestBuffer = await buffer(req);
      const payload = requestBuffer.toString();
      const sig = req.headers["stripe-signature"];

      const event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        try {
          await fullFillOrder(session);
          res.status(200).send("Success");
        } catch (err) {
          res.status(400).send(`Webhook Error: ${err.message}`);
        }
      } else {
        res.status(400).send("Unsupported event type");
      }
    } catch (error) {
      console.log("Error", error.message);
      res.status(400).send(`webhook error: ${error.message}`);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export const config = {
  api: {
    bodyParser: false, // Not needed for webhooks
    externalResolver: true,
  },
};
