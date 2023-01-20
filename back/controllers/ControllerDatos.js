import Datos from "../models/ModelDatos.js";

const nuevoRegistro = async(req, res) =>{
    try {
        await Datos.create(req.body)
        res.json({
            message: 'Registro Exitoso'
        })
    } catch (error) {
        res.json({
            message: `Registro NO xitoso: ${error}`
        })
    }
}

export default nuevoRegistro;