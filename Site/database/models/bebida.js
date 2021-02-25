module.exports = (sequelize, DataTypes)=>{
     const bebida = sequelize.define("Bebida", 
      {
          id:{
              type: DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          } ,
          
          nombre_bebida:{type: DataTypes.VARCHAR(30)} ,
          
          precio:{type: DataTypes.DECIMAL} ,
          
          id_categorias:{type: DataTypes.INTEGER}

     },
     {}
     
     );

     bebida.associate = (models)=>{
               bebida.belongsToMany(models.usuario,{
                   through:"usuario_bebida",
                   as:"bebidas"
               })
     }

     return bebida
     
}