require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

//Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", require("./server/routes/index"));

app.listen(PORT, () => {
	console.log("App listening on port: " + PORT);
});
