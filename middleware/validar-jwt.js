const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = (req,res,next)=>{

    const token = req.header('token');


    if (!token){


        return res.status(401).json({

            stauts:false,
            mensaje:'NO mando el token'

        });
    }


    try {

        const {_id,usuario} = jwt.verify(token,process.env.JWT_SECRET);
        req._id=_id;
        req.usuario=usuario;
        next();

    } catch (error) {

        return res.status(401).json({

            stauts:false,
            mensaje:'TOken no valido'

        });

    }
    

}

module.exports={

    validarJWT

}