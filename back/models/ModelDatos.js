import database from "../database/ConexionDataBase.js";
import { DataTypes } from "sequelize";

const Datos = database.define('datos',{
    tipoIdentificacion:{
        type: DataTypes.STRING
    },
    numeroIdentificacion:{
        type: DataTypes.STRING
    },
    nombres:{
        type: DataTypes.STRING
    },
    apellidos:{
        type: DataTypes.STRING
    },
    fechaNacimiento:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    },
    ciudad:{
        type: DataTypes.STRING
    },
    departamento:{
        type: DataTypes.STRING
    },
    pais:{
        type: DataTypes.STRING
    },
    marca:{
        type: DataTypes.STRING
    }
})

export default Datos;