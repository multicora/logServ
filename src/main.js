import Hapi from 'hapi';
import Promise from 'promise';

import config from './config';

export default function server() {
  const server = createServer(config);

  startServer(server).catch((err) => {
    console.log(err);
  });
};

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
        console.log(`Server running at: ${server.info.uri}`);
        resolve();
      }
    });
  });
}