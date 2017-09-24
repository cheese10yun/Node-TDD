const modles = require('../models');

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  };
  
  return modles.sequelize.sync(options);
};