import { Movie } from "../models/movies.models.js";


export const getAllMovies = (req,res) =>{
    const movies = Movie.findAll();

    res.json(movies);
}

