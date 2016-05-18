//modulos iniciales
var express = require('express');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');
//inicializacion 
var app = express();

//BD
mongoose.connect('mongodb://localhost:27017/Grocery', function(err) {  
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	}else{
		console.log('Conectado a BD. ');
	}
 });

//formateadores y convertidores
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

//controllers
var user = require('./App/Modelos/Usuario')(app, mongoose);
var usuarioController = require('./App/Controllers/UsuariosController');

var router = express.Router();
//Rutas
router.route('/users')
	.get(usuarioController.findAllUsers)
	.post(usuarioController.addUser);

router.route('/users/:id')
	  .get(usuarioController.findById);


app.use(router);

 
app.listen(3000, function() {
	console.log("Node server running on http://localhost:3000");
});
