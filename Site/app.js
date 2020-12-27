const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs")
app.set("view",__dirname+"/views")
app.use(express.static(__dirname+"/public"));
let rutasProducts=require("./routes/products.js")
let rutasMain=require("./routes/main.js")


app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});

app.use("/products",rutasProducts)
app.use("/",rutasMain)



  





