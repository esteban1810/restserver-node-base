const express = require('express');
const app = express();

const Usuario = require('../controllers/usuario')
const user = new Usuario()

app.get('/',user.usuarioGet)
app.post('/',user.usuarioPost)
app.put('/:id',user.usuarioPut) // Parametro
app.delete('/',user.usuarioDelete)
app.patch('/',user.usuarioPatch)

module.exports = app;

