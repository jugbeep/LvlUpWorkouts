
//requireing
var DB = require("../models").models;

/****************
*	dummy data	*
****************/



/************************
	sets up the users	*
************************/

let userCreate = function(){
	return DB.User.create(
		{
			name: 'Sassan'
		}
	)
		.then(
			function(user){
				workoutactivityCreate(user.id);
			}
		)
}


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


