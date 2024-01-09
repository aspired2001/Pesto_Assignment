const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
});

module.exports = mongoose.model('Task', taskSchema);
