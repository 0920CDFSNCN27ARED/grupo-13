const mains ={

     home:(req,res)=>
     {res.render("user/home")},

     post:(req,res)=>
     {res.render("user/home") },

     login:(req, res) => 
     {res.render("user/login") } ,

     register:(req, res) => 
     {res.render("user/register") },

     cart:(req, res) => 
     {res.render("products/cart") },

     
}

module.exports= mains;


