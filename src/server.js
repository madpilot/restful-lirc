import express from 'express';
var bodyParser = require('body-parser')

class Server {
  constructor(remotes) {
    this.remotes = remotes;
    this.app = express();
    this.app.use(bodyParser.json());
  }

  setup() {
    this.app.get('/', index);
    this.app.get('/devices', devices);
    this.app.post('/devices/:device', device);
    this.app.post('/macros/:macro', macro);
  }

  // Return list of remotes and the buttons they support
  // For the moment, we are interested in the name, and the codes
  devices(req, res) {
    var response = []
    this.remotes.forEach((remote) => {
      var decorated = {};
      decorated.name = remote.name;
      decorated.buttons = [];
      remote.bodes.forEach((code, key) => {
        decorated.buttons.push(key);
      });
    });
    res.send(decorated);
  }

  // Send a button press to a device
  device(req, res) {

  }

  // Run a macro
  macro(req, res) {
    
  }

  listen(port, cb) {
    this.app.listen(port, cb);
  }

  static setup(remotes) {
    let server = new Server(remotes);
    server.setup();
    return server;
  }
}

export default Server;
