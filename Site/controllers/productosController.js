const productos ={

     todos:(req,res)=>
     {res.render("products/productos")},

     elegir:(req,res)=>{
          
      },

      crear:(req, res) => {
          res.render("products/create")
        } ,

        guardar:(req, res) => {
            res.render("products/create")
          } ,

         

      editar:(req, res) => {
            res.render("products/edit")
          } ,


      actualizar:(req, res) => {
            res.render("products/edit")
          } ,

          cart:(req, res) => 
     {res.render("products/cart") },

  

}




module.exports=productos;