let express = require ("express")
let router = express.Router()
let mainControllers= require("../controllers/mainController.js")

   router.get("/",main.home );
   
   router.post("/", main.post);
   
   router.get("/login",main.login);
   
   router.get("/register",main.register);   
   
   router.get("/cart",main.cart);   
   


   module.exports=router;