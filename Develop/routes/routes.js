const fs = require("fs");
const path = require("path");

module.exports = app => {

    // Grab the data from the db.json
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        const notes = JSON.parse(data);

        // Read the db.json file
        app.get("/api/notes", (req, res) => {
            res.json(notes);
        });


        // ROUTES

        // Route to view index.html 
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // Route to view notes.html
        app.get("/notes", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });


        app.post("/api/notes", (req, res) => {
            let newNote = req.body;
            notes.push(newNote);
            updateDB();
        });

        // Retrieve a specific note
        app.get("/api/notes/:id", (req,res) => {
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
    });
};