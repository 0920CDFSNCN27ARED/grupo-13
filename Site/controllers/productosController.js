const productos ={

     todos:(req,res)=>
     {res.sendFile(path.resolve(__dirname , "views/products.html"))},

     elegir:(req,res)=>{
          let idProducts = req.params.id;
          for(i=0;i<products.length;i++){
              if(products[i].id==idSerie){
                  res.send(products[i])
              }
          }
      },

      crear:(req, res) => {
          res.send("Crea tu producto")
        } 

}









module.exports=productos;