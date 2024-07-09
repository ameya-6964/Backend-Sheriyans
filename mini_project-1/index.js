const express = require("express");
const app = express();
const fs = require('fs');
const path = require("path")

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")


app.get("/", function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        if (err) {
            return res.send("ERROR");
        }
        res.render('index', { files: files })
    })
})

app.get('/create', function (req, res) {
    res.render("create")
})

app.post('/createtask', function (req, res) {
    fs.writeFile(`./files/${req.body.title}.txt`, req.body.content, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/")
    })
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})

