const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require ("method-override")
const {Bebida,Categorias,StockP,Stock,UsuarioP,Usuarios}=require("./database/models")



app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(methodOverride("_method"))

let rutasProducts=require("./Routes/products.js")

let rutasMain=require("./Routes/main.js")


app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});

app.use("/products",rutasProducts)

app.use("/",rutasMain)





  





