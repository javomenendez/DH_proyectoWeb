const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../views/home.html"))
);

app.get("/registro", (req, res) =>
  res.sendFile(path.join(__dirname, "../views/register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "../views/login.html"))
);

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
