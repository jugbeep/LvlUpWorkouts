
//requireing
var DB = require("../models").models;

/************************
	sets up the users	*
************************/

// let userCreate = function(){
// 	return DB.User.create(
// 		{
// 			name : 'Sassan',
// 			createdAt: false,
// 			updatedAt: false
// 		}
// 	)
// 		.then(
// 			function(user){
// 				workoutactivityCreate(user.id);
// 			}
// 		)
// }

//this is for removing timestamps
//http://docs.sequelizejs.com/manual/tutorial/models-definition.html#configuration


/********************
*	workoutactivity	*
********************/

let workoutactivityCreate = function(userId){
	return DB.Workoutactivity.create(
		{
			name: "do nothing",
			//userId : userId, at some point maybe we can tie a workout to a user
		},
		{
			name: 'Push Ups',
		},
		{
			name: 'Sit Ups',
		},
		{
			name: 'Burpees',
		}
		//prity sure this is were we can seed more workoutactivitys
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



workoutactivityCreate()
// userCreate() 
.then(function() {
     process.exit();
});


