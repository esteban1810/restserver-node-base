class Usuario {
    usuarioGet(req, res) {
        res.json({
            msg:"GET API - usuarioGet",
        })
    }

    usuarioPost(req, res) {
        const {body} = req;
        // console.log(body);
        res.json({
            msg:"POST API - usuarioPost",
            body
        })
    }

    usuarioPut(req, res) {
        res.json({
            msg:"PUT API - usuarioPut",
        })
    }

    usuarioDelete(req, res) {
        res.json({
            msg:"DELETE API - usuarioDelete",
        })
    }
    usuarioPatch(req, res) {
        res.json({
            msg:"PATCH API - usuarioPatch",
        })
    }
}

module.exports = Usuario;