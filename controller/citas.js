const Citas = require('../models/citas');

const TraerCitas = async (req,res)=>{

    try {
        
        const citas = await Citas.find({}) 
    
       return res.status(200).json({
            status:true,
            mensaje:'Citas generadas',
            citas

    
        });
        
    } catch (error) {
        return res.status(500).json({
            status:false,
            mensaje:'Error al traer los datos',
            citas
    
        });
    }

}


const GuardarCitas = async ( req,res)=>{

    const body = req.body;

    
    const citas = new Citas({...req.body});
    
    
    
    try {
        

        const cita = await  citas.save();

      return  res.status(200).json({

            status:true,
            mensaje:"cita Generada",
            cita

        });

    } catch (error) {


      return  res.status(500).json({

            status:false,
            mensaje:"Erro al generar la cita",
            error

        });

        
    }

    

}

const EliminarCita = async (req,res)=>{

    const id  = req.params.id;
    
    try {
        
        const cita = await Citas.findByIdAndDelete(id);

        if (!cita){

            return  res.status(400).json({

                status:false,
                mensaje:"Cita no existe",
                
    
            });

        }

      return  res.status(200).json({

            status:true,
            mensaje:"cita Borrada",
            cita

        });

    } catch (error) {


      return  res.status(500).json({

            status:false,
            mensaje:"Erro al borrar la cita",
            error

        });
        
    }

}


const ActualizarCita = async (req,res)=>{

    const id  = req.params.id;
    
    try {
        
        
        
        const cita = await Citas.findByIdAndUpdate(id,{...req.body});

        if (!cita){

            return  res.status(400).json({

                status:false,
                mensaje:"Cita no existe",
                
    
            });

        }

      return  res.status(200).json({

            status:true,
            mensaje:"cita Actualizada",
            cita

        });

    } catch (error) {


      return  res.status(500).json({

            status:false,
            mensaje:"Erro al Actualizar la cita",
            error

        });

        
    }




}


module.exports ={
    TraerCitas,
    GuardarCitas,
    EliminarCita,
    ActualizarCita
}