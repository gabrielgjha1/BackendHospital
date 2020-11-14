const {Schema,model} = require('mongoose');

const CitasSchema = new Schema({


    nombre:{ type:String,required:true},
    apellido:{ type:String,required:true},
    cedula:{ type:String,required:true},
    sexo:{ type:String,required:true},
    correo:{ type:String,required:true},
    
})

module.exports = model('Citas',CitasSchema);