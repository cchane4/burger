
//DEPENDENCIES//
var express = require('express'); 
var bodyParser  = require('body-parser');
var methodOverride = require("method-override");
///SETTING UP EXPRESS //
var app = express(); 
var PORT = 3000;
//SET UP EXPRESS FOR PARSING// 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(bodyParser.text()); 
app.use (bodyParser.json({ type:'application/vnd.api+json'}));
// Override WITH POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//SERVING STATIC CONTENT 
app.use(express.static( "public"));

//IMPORT THE ROUTES AND GIVE THE SERVER ACCESS 
var routes = require('./controllers/burgers_controller.js'); 
app.use("/",routes); 

//PORT TO LISTEN FOR REQUESTS 
app.listen(3000, function(){ 
	console.log('connected at port' + PORT);
});
 