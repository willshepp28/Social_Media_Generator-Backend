'use strict';
module.exports = (sequelize, DataTypes) => {
  const Save = sequelize.define('Save', {
    post_id: DataTypes.INTEGER
  }, {});
  Save.associate = function(models) {
    // associations can be defined here
  };
  return Save;
};