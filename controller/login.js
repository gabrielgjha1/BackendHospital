const  {generarJWT} = require('../helpers/jwt');

const Usuario = require('../models/login');

const Login = async (req,res)=>{

    const email = req.body.correo;
    const password = req.body.password;
    console.log(password);
    console.log(email);
    try {
        
    const correo = await Usuario.findOne({correo:email}); 
    
    if (!correo){

       return    res.status(400).json({
            status:true,
            mensaje:'El correo no existe',
            correo
    
        });
    }

    const contra = await Usuario.findOne({password:password}); 

    const token =  await generarJWT(correo._id,correo);

    if (!contra){

     return   res.status(400).json({
            status:true,
            mensaje:'El usuario no existe',
            usuario:correo
           
        });
    

    }


  return  res.status(200).json({
        status:true,
        mensaje:'hola',
        usuario:correo,
        token

    });


    
    } catch (error) {
        
        res.status(500).json({
            status:false,
            mensaje:'Error al hacer login',
            token
    
        });

    }

}

module.exports = {

    Login
}