// Dependencies
const express = require('express');
const mysql = require('mysql');
const path = require('path'); 

// express
var app = express();
var PORT = process.env.PORT || 8080;




// Basic route that sends the user to the index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//link to survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./routes/htmlRoutes");



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});