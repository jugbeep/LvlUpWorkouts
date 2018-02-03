module.exports = function(sequelize, Sequelize){
  	var models = sequelize.define(
  		"user", 
  		{
    		name : Sequelize.STRING
  		}
  	);
  	return models;
};