const usuarioService = require("../services/usuarioService")

module.exports={
    async criarUsuario(req,res){
        try {
            const dados=  req.body
            
            const resultado = await usuarioService.criarUsuario(dados)
            return res.status(200).send(resultado)
            
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode || 500).send(error)
        }
    }
}