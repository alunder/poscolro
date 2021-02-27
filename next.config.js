const path = require('path');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = withCSS(
  withImages({
    env: {
      CONSOLE_MSG: process.env.CONSOLE_MSG,
      API_URL: process.env.API_URL,
      API_ROOT: process.env.API_ROOT,
    },
    webpack(config) {
      config.resolve.alias.components = path.join(__dirname, 'components');
      config.resolve.alias.lib = path.join(__dirname, 'lib');
      return config;
    },
  }),
);
