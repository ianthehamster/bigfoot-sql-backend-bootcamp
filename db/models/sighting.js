'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sighting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define the 1-to-Many associaton to comments
      this.hasMany(models.comment); // Singular comment
      this.belongsToMany(models.category, {
        through: 'sighting_categories',
        timestamps: false,
      });
    }
  }
  Sighting.init(
    {
      date: DataTypes.DATE,
      location: DataTypes.STRING,
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'sighting',
      underscored: true, // Column names are to be snake_case and NOT camelCase
    },
  );
  return Sighting;
};
