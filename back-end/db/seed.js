
//requireing
var DB = require("../models").models;

/************************
	sets up the users	*
************************/

let userCreate = function(){
	return DB.User.create(
		{
			name : 'Sassan'
		}
	)
		.then(
			function(user){
				workoutactivityCreate(user.id);
			}
		)
}

//this is for removing timestamps
//http://docs.sequelizejs.com/manual/tutorial/models-definition.html#configuration


/********************
*	workoutactivity	*
********************/

let workoutactivityCreate = function(userId){
	return DB.Workoutactivity.create(
		{
			name: "do nothing",
			userId : userId
		}
		//prity sure this is were we can seed more workoutactivitys
	)
		.then(
			function(workoutactivity){
				workoutCreate(workoutactivity.Id,user.Id);
			}
		)
}


/************
*	workout	*
************/
 let workoutCreate = function(workoutactivityId, userId){
 	return DB.Workout.create(
	 	{
	 		name : "test workout",
 			workoutactivityId : workoutactivityId,
 			userId : userId
	 	}
 	);
 }




userCreate() 
.then(function() {
     process.exit();
});


