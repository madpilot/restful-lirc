import { default as Codes } from './codes.js';
import { default as Server } from './server.js';
import { default as options } from './args.js';

let remotes = Codes.read(options.lircConfig);
let server = Server.setup(remotes);

server.listen(options.port, () => {
  console.log('Listening on ' + options.port);
});
