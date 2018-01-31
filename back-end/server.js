require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

if(!process.env.DYNO) {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
      next();
    });
  }

app.use(express.static(__dirname + '/dist'));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

/************************************************
/			Put your name in this let 			*
************************************************/
let name = 'sassankermani';

//set up for app
//let express = require('express');
//let app = express();
//let bodyParser = ('body-parser');
let port = process.env.PORT || 3000;
//let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://' + name + '@localhost:5432/dnddatabase');

//app using stuff
app.use(bodyParser());

//basic rout
app.get('/', function(req, res){

	res.send('Yo you did a thing yo');
});



//listener
app.listen(port, function(){
	console.log(`Listening on port ${port}`);
});
