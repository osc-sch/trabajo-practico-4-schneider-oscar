import { Movie } from "../models/movies.models.js";


export const getAllMovies = async (req,res) =>{
    try{
        const movies = await Movie.findAll();

        res.json(movies);
    }catch(err){
        res.status(500).json({message:'Se produjo el error' , error: err.message });
    }
};

export const createMovie = async (req, res) => {
    const { title, gender, duration, year } = req.body;
    let synopsis = '';

    if (title === "" || gender === "" || duration === "" || year === "") {
        res.status(404).json({ message: "No puede haber campos vacios" });
    }

    if (duration <= 0 || typeof duration == 'string' || !Number.isInteger(duration)) {
        res.status(404).json({ message: "El formato de la Duracion no es el correcto" });
    }

    if (year < 1888) {
        res.status(404).json({ message: "No puede haber peliculas antes de 1888" });
    }

    const actualYear = new Date().getFullYear();

    if (year > actualYear ) {
        res.status(404).json({ message: "El año en que se estrenó la pelicula no puede ser mayor que el actual" });
    }

    if (req.body.synopsis != '') {
        if (typeof req.body.synopsis == 'string') {
            synopsis = req.body.synopsis
        }
    }

    const newMovie = {
        title,
        gender,
        duration,
        year,
        synopsis
    }

    try {
        const createdMovie = await Movie.create(newMovie)

        if (createdMovie) {
            
            res.json({message: "Se cargo corectamente la pelicula"})
        }

    } catch (error) {

        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                error: `ya hay una pelicula registrada bajo el nombre de '${title}'`
            });
        }
        
        res.status(500).json({ message: 'Se produjo el error', error: error.message });
    }
};

export const updateMovie = async (req,res) => {
    const { title, gender, duration, year } = req.body;
    const idMovie = req.params.id
    let synopsis = '';

    if (title === "" || gender === "" || duration === "" || year === "") {
        res.status(404).json({ message: "No puede haber campos vacios" });
    }

    if (duration <= 0 || typeof duration == 'string' || !Number.isInteger(duration)) {
        res.status(404).json({ message: "El formato de la Duracion no es el correcto" });
    }

    if (year < 1888) {
        res.status(404).json({ message: "No puede haber peliculas antes de 1888" });
    }

    const actualYear = new Date().getFullYear();

    if (year > actualYear ) {
        res.status(404).json({ message: "El año en que se estrenó la pelicula no puede ser mayor que el actual" });
    }

    if (req.body.synopsis != '') {
        if (typeof req.body.synopsis == 'string') {
            synopsis = req.body.synopsis
        }
    }

    const dataUpdateMovie = {
        title,
        gender,
        duration,
        year,
        synopsis
    }

    const MovieUP = await Movie.findByPk(idMovie)
    
    try {

        if (MovieUP) {
            const MovieUpdated = await Movie.update(dataUpdateMovie, { where: { id: idMovie } });
            res.json(MovieUP)
        }
        else res.status(404).json(`no se encontro ninguna pelicula con el id ${idMovie}`)

    } catch (error) {

        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                error: `ya hay una pelicula registrada bajo el nombre de '${title}'`
            });
        }
        
        res.status(500).json({ message: 'Se produjo el error', error: error.message });
    }
};

export const getMovieById = async (req, res) => {
    const idMovie = req.params.id

    try {
        const movie = await Movie.findByPk(idMovie);

        if (movie) res.json(movie);
        else res.status(404).json({ message: `No se encontro ninguna pelicula con el id ${idMovie}` });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteMovie = async (req,res) => {
    const idDeletedMovie = req.params.id

    try{
        const movieDeleted = await Movie.destroy({ where: { id: idDeletedMovie } })
    
        if (movieDeleted) res.json({ message: "se elimino exitosamente la pelicula" });
        else res.status(404).json({ message: "no se encontro ninguna pelicula con el id " });
    } catch (error) {
        res.status(500).json({ message: 'Se produjo el error', error: error.message });
    }

}
