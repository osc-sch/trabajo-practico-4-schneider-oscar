import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Movie = sequelize.define(
    'Movie',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement: true,
            unique:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        synopsis: {
            type: DataTypes.STRING,
            allowNull:true
        }
    },
    {}
)