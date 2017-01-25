
//DEPENDENCIES//
var express = require('express'); 
var bodyParser  = require('body-parser'); 
var path = require('path'); 

///SETTING UP EXPRESS //
var app = express(); 
var PORT = 3000; 
//SET UP EXPRESS FOR PARSING//
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text()); 
app.use (bodyParser.json({ type:'application/vnd.api+json'}));
//SERVER LISTENING FOR REQUESTS///
app.use('/', express.static(path.join(__dirname,'./public')));

// this is a function bc module.exports is a function 
var apiFn = require('./routing/apiRoutes.js'); 
apiFn(app); 
var htmlFn = require('./routing/htmlRoutes.js'); 
htmlFn(app); 

//PORT TO LISTEN FOR REQUESTS 
app.listen(3000,function(){ 
	console.log('listening on port'+ PORT); 
});
// CHECK TO SEE IF THIS WORKS ^^^^^^