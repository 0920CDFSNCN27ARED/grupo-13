let express = require ("express")
let router = express.Router()
let productos=require("../controllers/productosController.js")

router.get("/all",productos.todos ); 

router.get("/:id",productos.elegir)
 
router.get("/create",productos.crear ); 

 module.exports=router;