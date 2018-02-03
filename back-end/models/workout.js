module.exports = function(sequelize, Sequelize){
	var model = sequelize.define(
		"workout",
		{
			name : Sequelize.STRING
		}
	)
	return model;
}