//for heroku
require('dotenv').config();

//basic requires
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//let Sequelize = require('sequelize');														//this is now in models/index.js 

/********************************
/	Put your name in this let 	*															//this is now in models/index.js 

********************************/
//let name = 'sassankermani';																//this is now in models/index.js 


//let sequelize = new Sequelize('postgres://' + name + '@localhost:5432/dnddatabase');		//this is now in models/index.js 

const port = process.env.PORT || 3000;

//app.use set up
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));		//dont thnk we need this
app.use(bodyParser.json());																//this was braking i got rid of it has not broke net. 


//for heroku
if(!process.env.DYNO) {
    app.use(function(req, res, next) {

      res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
  	  res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
      next();
    });
  }

//for huroku / anguler
app.use(express.static(__dirname + "/"  + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


//router
let router = require('./config/routes.js')
app.use(router);


//listener
app.listen(port, function(){
	console.log(`Listening on port ${port}`);
});
