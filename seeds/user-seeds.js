const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Cornholio',
        email: 'test1@test.com',
        password: 'password'
    },
    {
        username: 'Boris the animal',
        email: 'test2@test.com',
        password: 'password'
    },
    {
        username: 'Slug',
        email: 'test3@test.com',
        password: 'password'
    },
    {
        username: 'Jaba the Hut',
        email: 'test4@test.com',
        password: 'password'
    },
    {
        username: 'Cornelius',
        email: 'test5@test.com',
        password: 'password'
    },
    {
        username: 'Big Johnson',
        email: 'test6@test.com',
        password: 'password'
    },
];
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;