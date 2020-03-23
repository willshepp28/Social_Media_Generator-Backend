'use strict';
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
    caption: DataTypes.TEXT
  }, {});
  Share.associate = function(models) {
    // associations can be defined here
  };
  return Share;
};