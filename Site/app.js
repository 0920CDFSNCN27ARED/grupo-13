const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require ("method-override")



app.set("view engine","ejs")
app.set("view",__dirname+"/views")
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(methodOverride("_method"))

let rutasProducts=require("./routes/products.js")

let rutasMain=require("./routes/main.js")


app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});

app.use("/products",rutasProducts)

app.use("/",rutasMain)

app.use((req,res,next)=>{
  res.status(404).render("not-found")
});



  





