let express = require ("express")
let router = express.Router()

router.get("/", (req, res) => {
     res.sendFile(path.resolve(__dirname , "views/home.html"));
   });
   router.post("/", (req,res)=>{
     res.sendFile(path.resolve(__dirname ,"views/home.html"));
   });
   router.get("/login", (req, res) => {
     res.sendFile(path.resolve(__dirname , "views/login.html"));
   });
   router.get("/register", (req, res) => {
     res.sendFile(path.resolve(__dirname , "views/register.html"));
   });   
   
   router.get("/cart", (req, res) => {
     res.sendFile(path.resolve(__dirname , "views/cart.html"));
   });   
   


   module.exports=routes