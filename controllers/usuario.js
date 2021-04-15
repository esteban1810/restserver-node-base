class Usuario {
    usuarioGet(req, res) {
        // QUERY
        const {nombre,edad=18,sexo='Femenino'} = req.query;
        res.json({
            msg:"GET API - usuarioGet",
            nombre,
            edad,
            sexo
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
        const {id} = req.params;
        res.json({
            msg:"PUT API - usuarioPut",
            id
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