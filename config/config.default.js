'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_1504417720833_5934';
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  }

  return config;
};