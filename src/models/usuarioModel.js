const mongoose = require("mongoose");
const {Schema} = mongoose

const usuarioModel= new Schema({
    usuario:{
        type:String,
        required:true
    },
    senha:{
        type:String,
        required: true,
        select:false
    }
},
{
    timestamps:true
})
module.exports = mongoose.model("usuario",usuarioModel)
