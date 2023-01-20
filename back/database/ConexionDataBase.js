import { Sequelize } from "sequelize";

const database = new Sequelize('registros', 'root', '',{
    host: 'localhost',
    dialect: "mysql"
})

export default database;