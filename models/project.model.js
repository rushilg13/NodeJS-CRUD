const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    technologies: { type: String, required: true },
    days: { type: Number, required: true },
});


// Export the model
module.exports = mongoose.model('Project', ProjectSchema);