import express from 'express';
import routerMovies from './src/routers/movies.routes.js';
const PORT = 3000

const app = express();

app.use(express.json());
app.use('/api',routerMovies)

app.listen(PORT,() =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})