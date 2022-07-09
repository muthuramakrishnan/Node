//common js modules
//common js -> this is a sytem implemented in node js for requiring / sharing code between files
//import express from express --> this is es2015 syntax.
//nodejs doesn't have support for es2015 modules
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//herouku can inject environment variables.
//these environment variables can be accessed through process.env
const PORT = process.env.PORT || 3000;
app.listen(PORT);
