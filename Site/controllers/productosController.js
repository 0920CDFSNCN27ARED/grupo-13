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
          res.send("create")
        } ,

        editar:(req, res) => {
            res.send("edit")
          } 
  

}









module.exports=productos;