const fs = require("fs");
const path = require("path");

module.exports = app => {

    // Read the db.json file
    app.get("/api/notes", function (req, res) {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;

            var notes = JSON.parse(data);
            res.json(notes);

        });
    });

    // Route to view notes.html
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    // ROUTES

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        notes.push(newNote);
        updateDB();
    });

    // Retrieve a specific note
    app.get("/api/notes/:id", (req, res) => {
        res.json(notes[req.params.id]);
    });

    // Delete a specific note
    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1);
        updateDB();
        console.log("Deleted note with id " + req.params.id);
    });

    function updateDB() {
        fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
            if (err) throw err;
            return true;
        });
    };

    // Route to view index.html 
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};