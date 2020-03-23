'use strict';
module.exports = (sequelize, DataTypes) => {
  const Save = sequelize.define('Save', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    }
  }, {});
  Save.associate = function(models) {
    // associations can be defined here
    Save.belongsTo(models.User, { foreignKey: 'user_id'});
    Save.belongsTo(models.Post, { foreignKey: 'post_id'});
  };
  return Save;
};