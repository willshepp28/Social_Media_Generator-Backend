'use strict';
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    caption: DataTypes.TEXT
  }, {});
  Share.associate = function(models) {
    // associations can be defined here
    Share.belongsTo(models.User, { foreignKey: 'user_id'});
    Share.belongsTo(models.Post, { foreignKey: 'post_id'});
  };
  return Share;
};