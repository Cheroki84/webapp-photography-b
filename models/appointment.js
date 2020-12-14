'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.User)
    }
  };
  Appointment.init({
    state: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateAppointment: DataTypes.DATE,
    price: DataTypes.DECIMAL,
    observations: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};