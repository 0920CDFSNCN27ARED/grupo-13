const express = require("express");
const app = express();
const path = require("path");
let rutasProducts=require("./routes/products.js")
let rutasMain=require("./routes/main.js")

const staticFileRouter = express.static("public");
app.use(staticFileRouter);

app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});

app.use("/products",rutasProducts)
app.use("/",rutasMain)



  





