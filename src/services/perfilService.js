const perfilModel = require('../models/perfilModel')
const erros = require("../errors")

module.exports = {
    async criarPerfil(dados) {
        try {
            const novoPerfil = {
                nome: dados.nome,
                endereco: {
                    rua: dados.endereco.rua,
                    numero: dados.endereco.numero,
                    complemento: dados.endereco.complemento,
                    bairro: dados.endereco.bairro,
                    cidade: dados.endereco.cidade,
                    estado: dados.endereco.estado,
                    cep: dados.endereco.cep
                },
                foto:dados.foto
            }
            const perfilCadastrado= await perfilModel.create(novoPerfil)
            return perfilCadastrado
        } catch (error) {
            console.log(error)
        }
    },
    async burcarTodosPerfi(){
        const resultado = await perfilModel.find()
        return resultado
    },
    async buscarPerfilId(id){
        try {
            const perfilEncontrado= await perfilModel.findOne({_id:id})
            return perfilEncontrado
            
        } catch (error) {
            throw erros.usuario.idNaoEncontrado
        }

    },
    async editarPerfil(id,dados){
        try {
            const usuario = await this.buscarPerfilId(id)
            console.log(usuario)
            const usuarioEditado = {
                _id: usuario._id,
                nome: dados.nome || usuario.nome,
                endereco: {
                    rua: dados.endereco.rua || usuario.endereco.rua,
                    numero: dados.endereco.numero ||usuario.endereco.numero,
                    complemento: dados.endereco.complemento || usuario.endereco.complemento,
                    bairro: dados.endereco.bairro || usuario.endereco.bairro,
                    cidade: dados.endereco.cidade || usuario.endereco.cidade,
                    estado: dados.endereco.estado || usuario.endereco.estado,
                    cep: dados.endereco.cep || usuario.endereco.cep
                },
                foto:dados.foto ||usuario.foto
                
            }
            
            const resultado = await perfilModel.findOneAndUpdate({_id:id},usuarioEditado,{new:true,upsert:false})
            return resultado
        } catch (error) {
            console.log(error)
            throw erros.usuario.idNaoEncontrado
        }
    },
    async deletarPerfil(id){
        try {
            
            const perfilDeletado = await perfilModel.findOneAndDelete({_id:id})
            return perfilDeletado
        } catch (error) {
            console.log(error)
            throw erros.usuario.idNaoEncontrado
        }
    }
}