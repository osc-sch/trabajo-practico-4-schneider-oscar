import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('movies','root','',{
    host:'localhost',
    dialect: 'mysql'
})

export const testConnection = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:true})
        console.log('Se establecio correctamente la conexion a la base de datos');
    }catch(err){
        console.log('No se pudo establecer la conexion a la base de datos Error: ', err );
    }
}