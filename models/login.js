const {Schema,model} = require('mongoose');


const UsuarioSchema  = new Schema({

    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    correo:{type:String,required:true},
    password:{type:String,required:true},
    rol:{type:String,default:"ADMIN_ROLE"},

});


module.exports  = model('usuario',UsuarioSchema)
