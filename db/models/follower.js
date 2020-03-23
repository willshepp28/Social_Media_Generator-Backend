'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    request_accepted: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
    Follower.belongsTo(models.User, { foreignKey: 'user_id'})
    Follower.belongsTo(models.User, { foreignKey: 'follower_id'})
  };
  return Follower;
};