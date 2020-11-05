// Dependencies
const express = require("express");
const path = require("path");

// Express configuration
const app = express();

// Initial PORT
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlenconded({extended: true }));
app.use(express.json());

// Require routes


// Listener

