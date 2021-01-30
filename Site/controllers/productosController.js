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
            let usuario={
                nombre=req.body.name,
                descripcion=req.body.description,
                categoria=req.body.category,
                imagen=req.body.image,
                precio=req.body.price,
                cant=req.body.cant


            }
            res.redirect("/")
          } ,

      editar:(req, res) => {
            res.render("edit")
          } ,


      actualizar:(req, res) => {
            res.render("edit")
          } ,
  

}









module.exports=productos;