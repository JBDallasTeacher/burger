var connection = require("../config/connection.js");
 
//****************************************************************************************************** */
var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
//****************************************************************************************************** */
    create: function (tableInput, Input, cb) {
        var queryString = "INSERT INTO " + tableInput +" (burger_name) VALUES (?);";
        console.log(queryString);

        connection.query(queryString, values, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
//****************************************************************************************************** */
    update: function (tableInput, objColVals, input,condition, cb) {
        var queryString = "UPDATE " + tableInput + " SET " + objColVals + " = " + input;

       // queryString += " SET ";
       // queryString += objToSql(objColVals);
        queryString += " WHERE id= " + condition;
        //queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
//****************************************************************************************************** */
    delete: function (tableInput, condition, cb) {
        var queryString = "DELETE FROM " + tableInput;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
//****************************************************************************************************** */
module.exports = orm;