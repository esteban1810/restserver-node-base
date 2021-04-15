class Usuario {
    usuarioGet(req, res) {
        res.json("GET API")
    }

    usuarioPost(req, res) {
        res.json("POST API")
    }

    usuarioPut(req, res) {
        res.json("PUT API")
    }

    usuarioDelete(req, res) {
        res.json("DELETE API")
    }
    usuarioPatch(req, res) {
        res.json("PATCH API")
    }
}

module.exports = Usuario;