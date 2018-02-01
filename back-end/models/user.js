module.exports = function(sequelize, Sequelize){

  	var model = sequelize.define(

  		"user", {

    		nsme: Sequelize.STRING
    		
  		}
  	);
  	
  	return model;
  	
};