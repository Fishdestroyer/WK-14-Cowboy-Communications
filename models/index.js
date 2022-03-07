const Post = require('./Post');
const User = require('./User');

// create associations
User.hasMany(Post, {
    foreignKey: 'username'
});

Post.belongsTo(User, {
    foreignKey: 'username',
    //set user_id to null when deleting post
    onDelete: 'SET NULL'
});

module.exports = { User, Post }