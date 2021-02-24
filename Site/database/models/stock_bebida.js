module.exports = (sequelize, DataTypes)=>{
     const stockPivot  = sequelize.define("StockP", 
     {
          id:{
              type: DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          } ,
          
          nombre_bebida:{type: DataTypes.VARCHAR(30)} ,

          id_bebida:{type: DataTypes.INTEGER},
          
          id_stock:{type: DataTypes.INTEGER}

     },
     {}
     )

     return stockPivot
}