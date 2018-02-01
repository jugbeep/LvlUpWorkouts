module.exports = function(sequelize, Sequelize){

	var model = sequelize.define(
		
		"workoutactivity",

		{
			name : Sequelize.STRING
		}

	)

}