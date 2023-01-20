import express from 'express';
import database from './database/ConexionDataBase.js';
import datosRouter from './routes/RouterDatos.js';


const app = express();
const puerto = 3100;

try {
    await database.authenticate()
    console.log('Conexion exitosa a la basede datos')
} catch (error) {
    console.log(`Conexion NO exitosa a la base de datos: ${error}`)
}

app.use('/registros', datosRouter)

app.listen(puerto, ()=>{
    console.log (`Servidor corriendo en el puerto ${puerto}`)
    console.log (`Servidor funcionando en http://localhost:3100`)
})