const express = require("express");
const { url } = require("inspector/promises");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'));
app.get("/", (req, res) => {
    res.render("index", ({ success: false }));
})

app.get("/dowload", (req, res) => {
    console.log(__dirname)
    const filePath = path.join(__dirname, "public", "pdf", "jayesh gehlot.pdf")
    res.sendFile(filePath);
});

app.post("/submit", (req, res) => {
    const data = req.body;
    console.log(data);
    res.render("index", ({ success: true }));
})


app.listen(port, () => {
    console.log("server started");

})