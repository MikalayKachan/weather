const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@api': resolvePath('./src/api'),
      '@assets': resolvePath('./src/assets'),
      '@components': resolvePath('./src/components'),
      '@constants': resolvePath('./src/constants'),
      '@hooks': resolvePath('./src/hooks'),
    },
  },
};
