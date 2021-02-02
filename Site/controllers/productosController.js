const productos ={

     todos:(req,res)=>
     {res.render("products")},

     elegir:(req,res)=>{
          let idProducts = req.params.id;
          for(i=0;i<products.length;i++){
              if(products[i].id==idProducts){
                  res.send(products[i])
              }
          }
      },

      crear:(req, res) => {
          res.render("create")
        } ,

        guardar:(req, res) => {
            res.render("create")
          } ,

         

      editar:(req, res) => {
            res.render("edit")
          } ,


      actualizar:(req, res) => {
            res.render("edit")
          } ,
  

}









module.exports=productos;