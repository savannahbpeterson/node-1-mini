const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;
const ctrl = require("./controllers/controller.js");

const app = express();

app.use(bodyParser.json());

app.get("/api/books", ctrl.getAllBooks);

app.post("/api/books", ctrl.createBook);

app.listen(4000, () => console.log("Housten we have lift off on port" + port));
