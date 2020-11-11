// Dependencies
const express = require("express");
// const path = require("path");

// Express configuration
const app = express();

// Initial PORT
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require routes

require ("./routes/routes")(app);


// Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  