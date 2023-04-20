const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    publishableKey: process.env.STRIPE_PUBLIC_KEY,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    exclude: [],
  },
});
// next.config.js
module.exports = {
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  images: {
    domains: ['i.ibb.co', 'ibb.co',"static.footshop.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
};
