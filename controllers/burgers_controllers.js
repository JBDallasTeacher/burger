var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
//********************************************************************************************* */
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    burger.all(function (data) {
        var handlebarsBurgers = {
            burgers: data
        };
        console.log(handlebarsBurgers);
        res.render("index", handlebarsBurgers);
    });
});
//********************************************************************************************* */
router.post("/", function (req, res) {
    console.log(req.body.input);
    burger.create(req.body.input, function () {
        res.redirect("/");
    })
});

//********************************************************************************************* */
router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log(id);

    burger.update("devoured", true, id, function(){
        res.redirect("/");
    })
});
//********************************************************************************************* */

// Export routes for server.js to use.
module.exports = router;
