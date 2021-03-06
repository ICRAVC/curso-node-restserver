const express = require('express');
var cors = require('cors');
 
class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 8081;
    this.usuariosPath = '/api/usuarios';
    //Middleware
    this.middleware();
    //Rutas de mi app
    this.routes();
  }

  middleware(){
    //Cors
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'));
  }

  routes(){

    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }
  listen(){

    this.app.listen(this.port, () =>{
      console.log('El server rest esta escuchando en localhost::' + this.port);
    });
    
  }
}

module.exports = Server;