'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recepcionproductos extends Model {
    /**
     
Helper method for defining associations.
This method is not a part of Sequelize lifecycle.
The models/index file will call this method automatically.*/
static associate(models) {}
}
recepcionproductos.init({
  fecha: DataTypes.DATE,
  codigoprod: DataTypes.INTEGER,
  numidprov: DataTypes.INTEGER,
  numfactura: DataTypes.INTEGER,
  cantidad: DataTypes.INTEGER,
  lote: DataTypes.STRING(100), 
  invima: DataTypes.STRING(16),
  vencimiento: DataTypes.DATE,
  descripcionestado: DataTypes.STRING(200),},
  {sequelize, modelName: 'recepcionproductos',  underscored:true});
return recepcionproductos;
};