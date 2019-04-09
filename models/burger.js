// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    //******************** The variables cols and vals are arrays.*********************************//
    create: function (input, cb) {
        orm.create("burgers", input, function (res) {
            cb(res);
        })
    },
    //********************************************************************************************// 
    update: function (objColVals, input, condition, cb) {
        orm.update("burgers", objColVals, input, condition, function (res) {
            cb(res);
        });
    },
    //********************************************************************************************//  

};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Export the database functions for the controller (catsController.js).
module.exports = burger;
