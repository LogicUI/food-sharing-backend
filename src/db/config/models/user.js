'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Food, {
        foreignKey: {
          name: 'id',
          allowNull: true
        }
      })
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isVerified: {
     type: DataTypes.BOOLEAN,
     defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};