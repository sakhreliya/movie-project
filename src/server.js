const express = require('express');
const connectDB = require('./db/dbConnect');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

// MongoDB Connect
connectDB();

app.use(express.json());

// routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Movie API');
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
