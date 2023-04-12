const withPWA = require("next-pwa");

module.exports = withPWA({
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
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
});
