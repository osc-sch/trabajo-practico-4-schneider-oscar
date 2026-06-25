import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movies.controllers.js";

const routerMovies  = Router();

export default routerMovies;

routerMovies.get('/movies', getAllMovies);
routerMovies.post('/movies', createMovie);
routerMovies.get('/movies/:id', getMovieById);
routerMovies.put('/movies/:id', updateMovie);
routerMovies.delete('/movies/:id', deleteMovie);
