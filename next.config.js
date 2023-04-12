const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    publishableKey: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
