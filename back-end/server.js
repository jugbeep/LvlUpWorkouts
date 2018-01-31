/************************************************
/			Put your name in this let 			*
************************************************/
let name = 'sassankermani';

//set up for app
let express = require('express');
let app = express();
//let bodyParser = ('body-parser');
let port = process.env.PORT || 3000;
//let Sequelize = require('sequelize');
//let sequelize = new Sequelize('postgres://' + name + '@localhost:5432/dnddatabase');

//app using stuff
app.use(bodyParser());

//basic rout
app.get('/', function(req, res){

	res.send('Yo you did a thing yo');
});



//listener
app.listen(port, function(){
	console.log('ap is up at ' + port);
});