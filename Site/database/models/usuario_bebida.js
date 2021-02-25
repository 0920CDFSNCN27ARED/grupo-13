module.exports = (sequelize, DataTypes)=>{
     const usuarioPivot = sequelize.define("UsuarioP",{

          id:{
               type: DataTypes.INTEGER,
               autoIncrement:true,
               primaryKey:true
           } ,
 
           id_bebida:{type: DataTypes.INTEGER},
           
           id_usuario:{type: DataTypes.INTEGER}
 

     },
     {}
     )

     return usuarioPivot
}