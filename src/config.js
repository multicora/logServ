import merge from 'merge';

let userConfig;

try {
  userConfig = require('./userConfig.js').default;
} catch (ex) {
  userConfig = {};
}

const config = {
  db: {
    dbName: '',
    host: 'localhost',
    user: '',
    password: ''
  },
  server: {
    port: 80
  },
  mailGun: {
    apiKey: '',
    domain: ''
  }
};
const fullConfig = merge.recursive(config, userConfig);

checkConfig(fullConfig);

export default merge.recursive(config, userConfig);

function checkConfig(configObj) {
  const required = [
    'db.dbName',
    'mailGun.apiKey',
    'mailGun.domain'
  ];

  return required.forEach((keyChain) => {
    if (!isValueExists(configObj, keyChain)) {
      throw new Error(`Value "${keyChain}" should exists in config.`);
    }
  });
}

function isValueExists(obj, keyChain) {
  const keys = keyChain.split('.');

  return keys.reduce((prev, cur) => {
    return prev && prev[cur];
  }, obj);
}
