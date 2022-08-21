const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

var a = 1;
var b = 2;
var c = a + b;

app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

//127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
