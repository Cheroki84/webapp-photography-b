'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dateappointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Appointment);
    }
  };
  Dateappointment.init({
    date: {
    type: DataTypes.DATE,
    unique: true
  },
    status: {
      type: DataTypes.ENUM('Disponible', 'Reservada'),
      defaultValue: 'Disponible'
    },
  }, {
    sequelize,
    modelName: 'Dateappointment',
  });
  return Dateappointment;
};