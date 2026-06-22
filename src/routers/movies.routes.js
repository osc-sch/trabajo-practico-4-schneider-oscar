import { Router } from "express";
import { getAllMovies } from "../controllers/movies.controllers.js";

const routerMovies  = Router();

export default routerMovies;

routerMovies.get('/movies',getAllMovies)