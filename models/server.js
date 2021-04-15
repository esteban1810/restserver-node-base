const express = require('express');
const cors  = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '../routes/usuario'

        // MIDDLEWARES
        this.middlewares();

        // ROUTES
        this.routes();
    }

    middlewares(){ // LOS MIDDLEWARES SE EJECUTAN ANTES DE RESPONDER AL USUARIO

        // CORS
        this.app.use(cors()) // Sirve para configurar nuestras peticiones

        this.app.use(express.json())

        // Directorio Públic
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/usuario',require(this.userPath));
    }

    listen(){
        this.app.listen(this.port, () => {
          console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
      
}

module.exports = Server;