const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Replace the following connection string with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://userDB:Jaguar2001@cluster0.uccc2dj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {  });

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
