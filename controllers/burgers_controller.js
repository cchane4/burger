//importing express and burger.js file 
var express = require('express');
var router = express.Router();
//import this file to use its database functions 
var burgerApp = require('../models/burger.js');
var connection = require('../config/connection.js'); 


//route from the html page to the database 

router.get("/", function(req, res) {
    res.render("index"); 
});
router.post("/create", function(req,res) { 
	var freshBurger = req.body; 
	console.log(req.body);
	connection.query('INSERT INTO burgers (burger_name, devoured) VALUES ("?" , FALSE)', 
		[ freshBurger.burger], // .burger comes from the name in handlebars 
		function(err, res){ 
			if (err){
				console.log(err);
			} else {
				console.log(res);
			}
	});  
}); 

/*router.put 
res.render*/
module.exports = router;
