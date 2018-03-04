//bringing stuff in form mdels
db = require('../models');
let WorkoutActivities = db.models.Workoutactivity;

/*==========================================
=            sendAll being used            =
==========================================*/

//get all
function sendAll(req, res) {
    WorkoutActivities.findAll({}).then(function(workOutActivities){
        console.log('hitting workOutActivities sendAll')
        res.json(workOutActivities)
    })
};

/*=====  End of sendAll being used  ======*/

/*=============================================
=            sendOne being used            =
=============================================*/

//get one
function sendOne(req, res) {
    WorkoutActivities.findById(req.params.id)
        .then(function(workOutActivities){
            if(!workOutActivities) res.send("workOutActivities is not found ");
            else res.json(workOutActivities);
        });   
};

/*=====  End of sendOne being used  ======*/

/*==========================================
=            create being used            =
==========================================*/

//make a new workOutActivities
function create(req, res) {
    console.log("hit create route")
    WorkoutActivities.create(req.body).then(function(workOutActivities){
        if(!workOutActivities) res.send("workOutActivities has not been saved");
        else res.json(workOutActivities);
    })
};

/*=====  End of create being used  ======*/

/*=========================================
=            update being used            =
=========================================*/

//updates workOutActivities
function update(req, res){
    console.log("first");
    WorkoutActivities.findById(req.params.id)
        .then(function(workOutActivities){
            console.log("third");
            if(!workOutActivities) res.send("workOutActivities has not found");
            else return workOutActivities.updateAttributes(req.body);
            console.log("line 35");
        })
        .then(function(workOutActivities){
            res.json(workOutActivities);
        });
}

/*=====  End of update being used  ======*/

/*========================================
=            delet being used            =
========================================*/

//delets workOutActivities
function destroy(req, res) {
    WorkoutActivities.findById(req.params.id)
        .then(function(workOutActivities){
            if(!workOutActivities) res.send(" workOutActivities is not found ");
            else return workOutActivities.destroy();
        })
        .then(function(){
            res.send("workOutActivities deleted.")
        })
};

/*=====  End of delet being used  ======*/


// make uneek workout 
// function make(req, res){

//     let temWorkout = req.body.workout
//     let tepUserId = req.body.userId;

//     let temp = {
//         name : temEmail,
//         userId : tepUserId
//     }

//     IndividualWorkouts.create(req.body).then(function(individualWorkouts){
//         if(!temp) res.send("workout activity is not valid");
//         else res.json(temp);
//     })
// }

module.exports.sendAll = sendAll;
module.exports.sendOne = sendOne;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
//module.exports.make = make;