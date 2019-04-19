// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
var burger = {
  all: function(cb) {
    orm.all('burger', function(res) {
      cb(res);
    });
  },

  //******************** The variables cols and vals are arrays.*********************************//
  create: function(input, cb) {
    orm.create('burger', ['burger_name', 'devoured'], [input, false], cb);
  },

  //********************************************************************************************//
  update: function(input, cb) {
    var condition = 'id=' + input;
    orm.update('burger', { devoured: true }, condition, cb);
  }

  //********************************************************************************************//
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Export the database functions for the controller (catsController.js).
module.exports = burger;
