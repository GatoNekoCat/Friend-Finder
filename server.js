// Dependencies
const express = require('express');
const mysql = require('mysql');
const path = require('path'); 

// express
var app = express();
var PORT = process.env.PORT || 8080;

//Questions
const qAndA = ["Your mind is always buzzing with unexplored ideas and plans", 
              "Generally speaking, you rely more on your experience than your imagination", 
              "You find it easy to stay relaxed and focused even when there is some pressure.", 
              "You rarely do something just out of sheer curiosity", "People can rarely rarely upset you.", 
              "It is often difficult for you to relate to other people's feelings.", 
              "In a discussion, truth should be more important than people's sensitivities.", 
              "You rarely get carried away by fantasies and ideas", 
              "You think that everyone's views should be respected regardless of whether they are supported by facts or not", 
              "You feel more energetic after spending time with a group of people"
];
/////


// Basic route that sends the user to the index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});