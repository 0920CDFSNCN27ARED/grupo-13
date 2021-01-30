let express = require ("express")
let router = express.Router()
let productos=require("../controllers/productosController.js")

router.get("/all",productos.todos ); 

router.get("/:id",productos.elegir)
 
router.get("/create",productos.crear ); 

router.post("/create",productos.guardar);

router.get("/edit/:id",productos.editar );

router.put("/edit",productos.actualizar );

 module.exports=router;