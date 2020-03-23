'use strict';
const { hashPassword } = require("../../helpers/encryption/encrypt.encryption");


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    profile_pic: DataTypes.TEXT
  }, {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await hashPassword(user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: 'user_id'});
    User.hasMany(models.Follower, { foreignKey: 'user_id'})
    User.hasMany(models.Follower, { foreignKey: 'follower_id'})
  };
  return User;
};