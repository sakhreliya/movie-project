const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.Controller');
const authenticateToken = require('../middleware/auth');

router.get('/movies', movieController.getAllMovies);
router.get('/movies/:id', movieController.getMovieById);
router.post('/movies', authenticateToken, movieController.createNewMovie);
router.put('/movies/:id', authenticateToken, movieController.updateMovieById);
router.delete('/movies/:id', authenticateToken, movieController.deleteMovieById);

module.exports = router;
