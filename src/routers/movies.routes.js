import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movies.controllers.js";

const routerMovies  = Router();

export default routerMovies;

routerMovies.get('/movies',getAllMovies)
routerMovies.post('/movies',createMovie)