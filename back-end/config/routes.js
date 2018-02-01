let express = require('express');
let router = express.Router();

//controlers for stuff
let userTabelController = require('../controllers/userTabel.js');

/************************************
*		routs for user tabel 		*
************************************/
//send all stuff
router.get('/api/userTabel', userTabelController.sendAll);

//get by id
router.get('/api/userTabel/:id', userTabelController.sendOne);

//post rout/ creat new user
router.post('api/userTabel', userTabelController.create);

//update rout/ update user information
router.put('api/userTabel', userTabelController.update);

//delete rout/ delet user
router.delete('api/userTabel', userTabelController.destroy);

/************************************************
*			routs for workout activitys			*
************************************************/



