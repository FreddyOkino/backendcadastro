const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuarioController")

router.post("/", (req,res)=>usuarioController.criarUsuario(req,res) )

module.exports=router