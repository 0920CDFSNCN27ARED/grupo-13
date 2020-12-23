let express = require ("express")
let router = express.Router()

router.get("/all", (req, res) => {
     res.sendFile(path.resolve(__dirname , "views/products.html"));
   }); 

router.get("/:id",function(req,res){
     let idProducts = req.params.id;
     for(i=0;i<products.length;i++){
         if(products[i].id==idSerie){
             res.send(products[i])
         }
     }
 })
 
 router.get("/create", (req, res) => {
   res.send("Crea tu producto")
 }); 

 module.exports=router;