'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provedores extends Model {
    /**
     
Helper method for defining associations.
This method is not a part of Sequelize lifecycle.
The models/index file will call this method automatically.*/
static associate(models) {}
}
provedores.init({
  idtype: DataTypes.ENUM('CC', 'NIT', 'CE', 'NITE'),
  numid: DataTypes.INTEGER,
  nombre: DataTypes.STRING(100), 
  direccion: DataTypes.STRING(100),
  nombrecontacto: DataTypes.STRING(100),
  celcontacto: DataTypes.INTEGER,},
  {sequelize, modelName: 'provedores',underscored:true});
return provedores;
};