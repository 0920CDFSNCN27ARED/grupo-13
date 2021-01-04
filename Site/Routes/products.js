let express = require ("express")
let router = express.Router()
let productos=require("../controllers/productosController.js")

router.get("/all",productos.todos ); 

router.get("/:id",productos.elegir)
 
router.get("/create",productos.crear ); 

router.post("/create",productos.crear);

router.get("/edit",productos.editar );

 module.exports=router;