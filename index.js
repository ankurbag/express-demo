// Step 1 : Install Express
// Step 2 : Instantaite Express
const express = require("express");
const todos = require("./todos");
const app = express();

// Step 4: Build APIS
app.get("/", function (req, res) {
	res.send("Welcome to my class!");
});

// /todos
app.get("/todos", function (req, res) {
	res.send(todos);
});

// Step 3 : Listening to a port
app.listen(8080, function () {
	console.log("Server started!!!!");
});
