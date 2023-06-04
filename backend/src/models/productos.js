'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     
Helper method for defining associations.
This method is not a part of Sequelize lifecycle.
The models/index file will call this method automatically.*/
static associate(models) {}
}
productos.init({
  codigo: DataTypes.INTEGER,
  nombre: DataTypes.STRING(100), 
  descripcion: DataTypes.STRING(200),
  estado:DataTypes.ENUM('activo', 'inactivo',),
  nombrelab: DataTypes.STRING(100),},
  {sequelize, modelName: 'productos',underscored:true});
return productos;
};