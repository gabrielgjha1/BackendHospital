
const Usuario = require('../models/login');


const TraerUsuario = async (req,res)=>{


    try {
        
        const usuarios  = await Usuario.find({});
        
        return res.status(200).json({

            status:true,
            mensaje:"datos",
            usuarios

        })

    } catch (error) {

       return res.status(500).json({

            status:false,
            mensaje:"datos",
            usuarios

        });
    }

}

const CrearUsuarios = async  (req,res)=>{

    const email = req.body.correo;

    console.log(email)

    try {
        
            const usuario = await Usuario.findOne({correo:email});
        
            if (usuario){
        
                return res.status(400).json({
        
                    status:false,
                    mensaje:"El correo existe",
                    usuario
        
                });
        
            }

            const UsuarioCreado = new Usuario({...req.body});

            const usuarios = await UsuarioCreado.save();


            return res.status(200).json({

                status:true,
                mensaje:"datos",
                usuarios
    
            });
        
    } catch (error) {
        return res.status(500).json({

            status:false,
            mensaje:"Error al registrar ",
            error

        });
    }


}



const EliminarUsuario = async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        
        const usuario = await Usuario.findByIdAndDelete(id);


        if (!usuario){

            return res.status(400).json({
        
                status:false,
                mensaje:"El Usuario no existe",
                usuario
    
            });

        }

        return res.status(200).json({

            status:true,
            mensaje:"datos eliminados",
            usuario

        });

       
    
    } catch (error) {

        return res.status(500).json({

            status:false,
            mensaje:"Error al  borrar los datos",
            error

        });

    }


}

const ActualizarUSuario = async (req,res)=>{
    const id = req.params.id;


    
    try {
        
        const usuario = await Usuario.findByIdAndUpdate(id,{...req.body});

        if (!usuario){
    
            return res.status(400).json({
        
                status:false,
                mensaje:"El Usuario no existe",
                usuario
    
            });
    
        }
    
        return res.status(200).json({
    
            status:true,
            mensaje:"Datos actualizados",
            usuario
    
        });



    } catch (error) {


        return res.status(500).json({

            status:false,
            mensaje:"Error al  borrar los datos",
            error

        });    

    }    

}




module.exports = {
    
    TraerUsuario,
    CrearUsuarios,
    EliminarUsuario,
    ActualizarUSuario

}