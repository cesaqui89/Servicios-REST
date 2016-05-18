var mongoose = require('mongoose');  
var Usuario = mongoose.model('Users');

//GET todos los usuarios
exports.findAllUsers = function(req, res) { 
console.log("findAllUsers"); 
    Usuario.find(function(err, users) {
    if(err) res.send(500, err.message);

    console.log('GET /users')
        res.status(200).jsonp(users);
    });
};

//GET encontrar un usuario especifico
exports.findById = function(req, res) {  
    Usuario
	.findOne({'usuario':'cesaqui89'})
	.exec( function(err, users) {
		//console.log('GET /users/' + req.params.id);
        res.status(200).jsonp(users);
    });
};

//POST - Insert a new TVShow in the DB
exports.addUser = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var userAdded = new Usuario({
		nombre:    	req.body.nombre,
		user: 	  	req.body.user,
		password:  	req.body.password,
	});

	userAdded.save(function(err, tvshow) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(tvshow);
	});
};


