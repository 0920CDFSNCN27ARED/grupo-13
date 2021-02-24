module.exports = (sequelize, DataTypes)=>{
     const stock = sequelize.define("Stock", 
     {
          id:{
              type: DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          } ,
          
          cantidad:{type: DataTypes.INTEGER} ,
          

     },
     {} 
     )

     return stock
}