const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/socket-controller");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Application routes
    this.routes();

    // Socket configuration
    this.sockets()
  }

  routes() {}

  sockets() {
    this.io.on("connection", socketController);
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio publico
    this.app.use(express.static("public"));

  }

  listen() {
    this.server.listen(process.env.PORT, () =>
      console.log(`Server running on port ${this.port}`)
    );
  }
}

module.exports = Server;
