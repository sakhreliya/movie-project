const Movie = require('../models/movie.Model');

const getAllMovies = async () => {
    return await Movie.find();
};

const getMovieById = async (id) => {
    return await Movie.findById(id);
};

const createNewMovie = async (movieData) => {
    const movie = new Movie(movieData);
    return await movie.save();
};

const updateMovieById = async (id, movieData) => {
    return await Movie.findByIdAndUpdate(id, movieData, { new: true });
};

const deleteMovieById = async (id) => {
    return await Movie.findByIdAndDelete(id);
};

module.exports = {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updateMovieById,
    deleteMovieById
};
