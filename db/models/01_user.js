'use strict';
const { hashPassword } = require("../../helpers/encryption/encrypt.encryption");


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        min: 3
      }
    },
    fullName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    profile_pic: {
      type: DataTypes.TEXT,
      defaultValue: "https://elitebasketballny.com/wp-content/uploads/2018/07/profile-placeholder.png"
    }
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
    User.hasMany(models.Comment, { foreignKey: 'user_id'});
    User.hasMany(models.Follower, { foreignKey: 'user_id'})
    User.hasMany(models.Follower, { foreignKey: 'follower_id'});
    User.hasMany(models.Like, { foreignKey: 'user_id'});
    User.hasMany(models.Share, { foreignKey: 'user_id'})
    User.hasMany(models.Save, { foreignKey: 'user_id'})
  };
  return User;
};