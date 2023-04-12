const withPWA = require("next-pwa");

module.exports = withPWA({
  // Remove the experimental property as a test
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
  env: {
    publishableKey: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
