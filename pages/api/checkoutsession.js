const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        description: `${item.name} - ${item.selectedSizeProp.size}`,

        images: [item.image[0].name],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // shipping_rates: ["shr_1MeQNmGsxXy1NXaYvYxeMJpl"],
    shipping_address_collection: {
      allowed_countries: ["US", "SG", "MY"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/basket`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image[0].name)),
    },
  });

  res.status(200).json({ id: session.id });
};
