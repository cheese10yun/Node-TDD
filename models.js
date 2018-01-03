const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.squlite',
  logging: false // default true
});

const User = sequelize.define('User',{
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});


module.exports = {Sequelize, sequelize, User};
