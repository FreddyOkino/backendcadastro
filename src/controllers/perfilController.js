const perfilService = require('../services/perfilService')

module.exports={
    async criarPerfil(req,res){
        try {
            const dados = req.body
            const resultado = await perfilService.criarPerfil(dados)
            return res.status(200).send(resultado)
            
        } catch (error) {
            return res.status(error.statusCode || 500).send(error) 
        }
    },
    async buscarTodosPerfil(req,res){
        try {
            const resultado = await perfilService.burcarTodosPerfi()
            return res.status(200).send(resultado)
        } catch (error) {
            return res.status(404).send("erro ao buscar perfils")
        }
    },
    async buscarPerfilId(req,res){
        try {
           
            const id = req.params.id
            const resultado = await perfilService.buscarPerfilId(id)
            return res.status(200).send(resultado)
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode || 500).send(error)
        }
    },
    async editarPerfil(req,res){
        try {
            const id= req.params.id
            const dados = req.body
            const resultado = await perfilService.editarPerfil(id,dados)
            return res.status(200).send(resultado)
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode || 500).send(error)
        }
    },
    async deletarPerfil(req,res){
        try {
            const id = req.params.id
            const resultado = await perfilService.deletarPerfil(id)
            return res.status(200).send(resultado)
        } catch (error) {
            return res.status(error.statusCode || 500).send(error)
        }
    }
}