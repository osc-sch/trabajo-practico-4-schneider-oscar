import { Movie } from "../models/movies.models.js";


export const getAllMovies = (req,res) =>{
    try{
        const movies = Movie.findAll();

        res.json(movies);
    }catch(err){
        res.status(500).json({message:'Se produjo el error' , error: err.message });
    }
};

export const createMovie = (req, res) => {
    try {
        const { title, gender, duration, year } = req.body;
        let synopsis = '';
        
        if (title === "" || gender === "" || duration === "" || year === "") {
            res.status(404).json({
                message:"No puede haver campos vacios"
            })
        }
        else {
            if (duration >0 && typeof duration != 'string' && Number.isInteger(duration)) {
                
                if (year > 1888 && year < 9999) {

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

                    res.status(201).json({message:"Se subio una pelicula" ,newMovie});

                } else {
                    res.status(404).json({
                        message:"No puede haber peliculas antes de 1888"
                    })
                }
            } else {
                res.status(404).json({
                    message:"Formato de duracion incorecto"
                })
            }
            
        }
    } catch (err) {
        res.status(500).json({ message: 'Se produjo el error', error: err.message });
    }
};

