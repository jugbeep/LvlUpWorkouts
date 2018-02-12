
//requireing
var DB = require("../models").models;

/************************
	sets up the users	*
************************/

let userCreate = function(){
	return DB.User.create(
		{
			name : 'Sassan',
			createdAt: false,
			updatedAt: false
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
			//userId : userId,
			timestamps: false
		}
		{
			name: 'Push Ups',
			timestamps: false
		}
		{
			name: 'Sit Ups',
			timestamps: false
		}
		{
			name: 'Burpies'
			timestamps: false
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
 			userId : userId,
 			timestamps: false
	 	}
 	);
 }




userCreate() 
.then(function() {
     process.exit();
});


