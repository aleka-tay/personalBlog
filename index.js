import express from "express";
import ejs from "ejs";



// Variables
const app = express();
const port = 3000;

let posts = [];

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs"); //another way of rendering an ejs file

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

// Post requests

app.post("/submit", (req, res) => { // From createPost to index
    posts.push([req.body["title"], req.body["content"]]); // pushing the the contents to the array of posts
    res.render("index", {posts: posts});
});

app.post("/submit-edit", (req, res) => { // From index to editPost
    res.render("editPost", {title: req.body.title, content: req.body.content, num: req.body.num}); // senging requested post to editing
});

app.post("/submit-save", (req, res) => { // From editPost to index
    const i = req.body.num; // getting index of post to change value in posts
    posts[i][0] = req.body.title;
    posts[i][1] = req.body.content;
    res.render("index", {posts: posts});
});

app.post("/submit-delete", (req, res) => { // From index to index
    const i = req.body.num;
    posts.splice(i, 1); // deleting the post on i index
    res.render("index", {posts: posts});
});

// Listening
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});