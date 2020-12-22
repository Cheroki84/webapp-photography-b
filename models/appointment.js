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
      this.belongsTo(models.User)
      this.belongsTo(models.Dateappointment)
    }
  };
  Appointment.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.DECIMAL,
    observations: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    DateappointmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};