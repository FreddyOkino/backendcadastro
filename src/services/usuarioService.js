const usuarioModel= require('./../models/usuarioModel')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10
const errors= require('../errors')
module.exports={
    criarUsuario: async(dados)=>{
        const hash = bcrypt.hashSync(dados.senha, SALT_ROUNDS);
        if(!dados){
            return errors.usuario.dadosIncompletos
        }
        const novoUsuario={
            usuario: dados.usuario,
            senha: hash
        }
        
        const novoUsuarioRegistrado= await usuarioModel.create(novoUsuario)
        return novoUsuarioRegistrado
    }
}