const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // MIDDLEWARES
        this.middlewares();

        // ROUTES
        this.routes();
    }

    middlewares(){ // LOS MIDDLEWARES SE EJECUTAN ANTES DE RESPONDER AL USUARIO
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('Hello World!')
        })
    }

    listen(){
        this.app.listen(this.port, () => {
          console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
      
}

module.exports = Server;