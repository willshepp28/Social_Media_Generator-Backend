'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    caption: DataTypes.TEXT,
    photo_url: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'user_id'});
    Post.hasMany(models.Save, { foreignKey: 'post_id'});
    Post.hasMany(models.Share, { foreignKey: 'post_id'});
    Post.hasMany(models.Comment, { foreignKey: 'post_id'});
    Post.hasMany(models.Like, { foreignKey: 'post_id'});
  };
  return Post;
};