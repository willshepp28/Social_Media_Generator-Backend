'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    request_accepted: DataTypes.BOOLEAN
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};