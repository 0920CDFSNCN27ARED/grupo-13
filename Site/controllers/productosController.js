const productos ={

     todos:(req,res)=>
     {res.render("products")},

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