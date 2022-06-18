//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://VIT_Admin:pizza@vitdiaries.tpuku.mongodb.net/NodeJS-CRUD?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});

const project = require('./routes/project.route'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/projects', project);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});