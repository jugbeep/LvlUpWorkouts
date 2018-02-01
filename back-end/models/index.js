//set up
var Sequelize = require('sequelize');

/********************************
/	Put your name in this let	*
********************************/
let name = 'sassankermani';

let sequelize = new Sequelize('postgres://' + name + '@localhost:5432/dnddatabase');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;

//models
let user = sequelize.import('./user');
let workout = sequelize.import('./workout');
let workoutactivity.import('./workoutactivity')

//exports moduels
module.exports = {
	user : user
	workout : workout
	workoutactivity : workoutactivity
}