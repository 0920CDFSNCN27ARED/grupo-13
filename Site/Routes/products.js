let express = require ("express")
let router = express.Router()
let products=require("../controllers/productosController.js")

router.get("/all",products.todos ); 

router.get("/cart",products.cart);   

router.get("/:id",products.elegir)
 
router.get("/create",products.crear ); 

router.post("/create",products.guardar);

router.get("/edit/:id",products.editar );

router.put("/edit",products.actualizar );


module.exports=router;