module.exports = (sequelize, DataTypes)=>{
     const stockPivot  = sequelize.define("StockP", 
     {
          id:{
              type: DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          } ,

          id_bebida:{type: DataTypes.INTEGER},
          
          id_stock:{type: DataTypes.INTEGER}

     },
     {}
     )

     return stockPivot
}