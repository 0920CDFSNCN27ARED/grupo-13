const express = require("express");
const app = express();
const path = require("path");

const staticFileRouter = express.static("public");
app.use(staticFileRouter);

app.listen(3000, () => {
  console.log("Estamos escuchando al puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname , "views/home.html"));
});
app.post("/", (req,res)=>{
  res.sendFile(path.resolve(__dirname ,"views/home.html"));
});

  app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname , "views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname , "views/register.html"));
});   

app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname , "views/carrito.html"));
});   

app.get("/products", (req, res) => {
  res.sendFile(path.resolve(__dirname , "views/product.html"));
});   
