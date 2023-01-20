import express from 'express';
import nuevoRegistro from '../controllers/ControllerDatos.js';

const datosRouter = express.Router();

datosRouter.post('/', nuevoRegistro)
 
export default datosRouter;
