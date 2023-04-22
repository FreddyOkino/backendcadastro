const express = require('express')
const router = express.Router()
const perfilController = require("../controllers/perfilController")

router.post("",(req,res)=> perfilController.criarPerfil(req,res))
router.get("",(req,res)=> perfilController.buscarTodosPerfil(req,res))
router.get("/:id",(req,res)=> perfilController.buscarPerfilId(req,res))
router.put("/:id",(req,res)=> perfilController.editarPerfil(req,res))
router.delete("/:id",(req,res)=> perfilController.deletarPerfil(req,res))


module.exports = router