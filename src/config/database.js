import { Sequelize } from "sequelize";

const sequelize = new Sequelize('movies','root','',{
    host:'localhost',
    dialect: 'mysql'
})

export const testConnection = async () =>{
    try{
        await sequelize.authenticate();
        console.log('Se establecio correctamente la conexion a la base de datos');
    }catch(err){
        console.log('No se pudo establecer la conexion a la base de datos Error: ', err );
    }
}