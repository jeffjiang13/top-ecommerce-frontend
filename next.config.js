module.exports = {
  env: {
    publishableKey: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
};
