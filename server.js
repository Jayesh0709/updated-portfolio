const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("index")
})

app.post("/submit", (req, res) => {
    // const { name, email, number, msg } = req.body;
    // console.log(name, email, number, msg);
    console.log(req.body);
    res.send(`
        <script>
        alert("thanks for submission"); 
        window.location = "/";
        </script>
        `);
})

app.listen(port, () => {
    console.log("server listen on", port);
})