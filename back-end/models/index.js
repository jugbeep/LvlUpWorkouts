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
let User = sequelize.import('./user');
let Workout = sequelize.import('./workout');
let Workoutactivity.import('./workoutactivity')

//relationships
Workout.belongsTo(User);
User.hasMany(Workout);

Workoutactivity.belongsTo(User);
User.hasMany(Workoutactivity);


//exports moduels
module.exports = {
	User : User
	Workout : Workout
	Workoutactivity : Workoutactivity
}