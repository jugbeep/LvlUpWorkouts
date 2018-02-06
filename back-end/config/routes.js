console.log('some stuff');

//set up
let express = require('express');
let router = express.Router();


//controlers for stuff
let userTabelController = require('../controllers/userTabel.js');
let workOutActivities = require('../controllers/workOutActivitiesTabel.js');
let individualWorkouts = require('../controllers/individualWorkoutsTavel.js')


/************
/	test	/
************/

//test
router.get('/', function(req, res){
	console.log('hit the get route')
	console.log(req.params.email)
	console.log(req.body.email)
	res.json( "its up " + req.body);
});

router.post('/', function(req, res){
	console.log("you hit the post")
	console.log(req.params.email)
	console.log(req.body.email)
	console.log(req.body)
	res.send(req.body.email);
});

/****************************
*	routs for user tabel 	*
****************************/
//send all users
router.get('/api/userTabel', userTabelController.sendAll);

//get by id
router.get('/api/userTabel/:id', userTabelController.sendOne);

//post rout/ creat new user
router.post('/api/userTabel', userTabelController.create);

//update rout/ update user information
router.put('/api/userTabel', userTabelController.update);

//delete rout/ delet user
router.delete('/api/userTabel', userTabelController.destroy);


/************************************
*	routs for workout activitys 	*
************************************/
//send all workout activitys
router.get('/api/workoutActivitysTabel', workOutActivities.sendAll);

//get by id
router.get('/api/workoutActivitysTabel/:id', workOutActivities.sendOne);

//post rout/ creat new workout activitys
router.post('api/workoutActivitysTabel', workOutActivities.create);

//update rout/ update workout activitys information
router.put('api/workoutActivitysTabel', workOutActivities.update);

//delete rout/ delet workout activitys
router.delete('api/workoutActivitysTabel', workOutActivities.destroy);


/************************************
*	routs for individual workouts 	*
************************************/
//send all workout activitys
router.get('/api/individualWorkoutsTabel', individualWorkouts.sendAll);

//get by id
router.get('/api/individualWorkoutsTabel/:id', individualWorkouts.sendOne);

//post rout/ creat new workout activitys
router.post('api/individualWorkoutsTabel', individualWorkouts.create);

//update rout/ update workout activitys information
router.put('api/individualWorkoutsTabel', individualWorkouts.update);

//delete rout/ delet workout activitys
router.delete('api/individualWorkoutsTabel', individualWorkouts.destroy);


//export
module.exports = router;





