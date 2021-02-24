module.exports = (sequelize, DataTypes)=>{
     const categoria = sequelize.define("Categorias", 
     {
          id:{
              type: DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          } ,
          
          nombre:{type: DataTypes.VARCHAR(15)} ,
          
     },
     {}

     )

     return categoria
}