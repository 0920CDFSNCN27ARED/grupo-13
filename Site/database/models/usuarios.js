module.exports = (sequelize, DataTypes)=>{
     const usuario = sequelize.define("Usuarios", 
     {
          id:{
              type: DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          } ,
          
          nombre_completo:{type: DataTypes.VARCHAR(30)} ,
          
          genero:{type: DataTypes.VARCHAR(15)} ,
          
          email:{type: DataTypes.VARCHAR(50)} ,

          contraseña : {type:DataTypes.VARCHAR(15)}



     },
     {}
     )

     usuario.associate = (models)=>{
          usuario.belongsToMany(models.bebida,{
              through:"usuario_bebida",
              as:"user"
          })
}

     return usuario
}