const mongoose = require('mongoose')
const {Schema}=mongoose
const perfilSchema= new Schema({
    nome:{type:String, required:true},
    endereco:{
        rua:{type:String,required:true},
        numero:{type:String,required:true},
        complemento:{type:String},
        bairro:{type:String,required:true},
        cidade:{type:String,required:true},
        estado:{type:String, required:true},
        cep:{type:String,required:true}
    },
    foto:{Object},
     
},
{
    timestamps:true
})
module.exports= mongoose.model("perfil", perfilSchema)