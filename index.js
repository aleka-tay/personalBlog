import express from "express";
import ejs from "ejs";

// Variables
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

// Route handler
app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/createPost", (req, res) => {
    res.render("createPost");
});

app.get("/editPost", (req, res) => {
    res.render("editPost");
});


// Listening
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});