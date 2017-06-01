import Hapi from 'hapi';
import Promise from 'promise';

import globalConfig from './config';

export default function() {
  const server = createServer(globalConfig);

  startServer(server).catch((err) => {
    console.error(err); // eslint-disable-line no-console
  });
}

function createServer(config) {
  const server = new Hapi.Server();

  server.connection({
    host: 'localhost',
    port: config.server.port
  });

  return server;
}

function startServer(server) {
  return new Promise((resolve, reject) => {
    server.start((err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
        resolve();
      }
    });
  });
}
