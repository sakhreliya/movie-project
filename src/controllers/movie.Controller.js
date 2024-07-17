const movieService = require('../services/movie.Service');

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMovieById = async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNewMovie = async (req, res) => {
    try {
        const movie = await movieService.createNewMovie(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateMovieById = async (req, res) => {
    try {
        const movie = await movieService.updateMovieById(req.params.id, req.body);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteMovieById = async (req, res) => {
    try {
        const movie = await movieService.deleteMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updateMovieById,
    deleteMovieById
};
