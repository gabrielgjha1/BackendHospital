const express = require('express');
const {dbConnection} = require('./database/config');
var cors = require('cors');



require('dotenv').config();

//GCuyh53JZopFnUxG
//gabrielgjha2

//crear el servidor de express
const app = express();


//configurar cors
app.use(cors());

//lectuara y parseo del body 
app.use(express.json());



//base de datos 
dbConnection();


//configurar cors
app.use(cors());




app.use('/citas',require('./routes/citas'));
app.use('/login',require('./routes/login'));
app.use('/usuarios',require('./routes/usuario'));


app.listen(process.env.PORT,()=>{

    console.log('Servidor Corriendosssas'+process.env.PORT)

});