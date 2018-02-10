//set up
var Sequelize = require('sequelize');

/********************************
/	Put your name in this let	*
********************************/
let name = 'kevinjames';

var sequelize = new Sequelize('postgres://' + name + '@localhost:5432/dnddatabase');

//Export models and Sequelize for seed and dbSetup
module.exports.sequelize = sequelize;

//models
let User = sequelize.import('./user');
let Workout = sequelize.import('./workout');
let Workoutactivity = sequelize.import('./workoutactivity')

//relationships
Workout.belongsTo(User);
User.hasMany(Workout);

//Workoutactivity.belongsTo(User);
//User.hasMany(Workoutactivity);

Workout.belongsTo(Workoutactivity);
Workoutactivity.hasMany(Workout);


//exports moduels
module.exports.models = {
	User : User,
	Workout : Workout,
	Workoutactivity : Workoutactivity
}