//bringing stuff in form mdels
db = require('../models');
let IndividualWorkouts = db.models.IndividualWorkouts;

//get all
function sendAll(req, res) {
    IndividualWorkouts.findAll().then(function(individualWorkouts){
        res.json(individualWorkouts)
    })
};

//get one
function sendOne(req, res) {
    IndividualWorkouts.findById(req.params.id)
        .then(function(individualWorkouts){
            if(!individualWorkouts) res.send("individualWorkouts is not found ");
            else res.json(individualWorkouts);
        });   
};

//make a new individualWorkouts
function create(req, res) {
    IndividualWorkouts.create(req.body).then(function(individualWorkouts){
        if(!individualWorkouts) res.send("individualWorkouts has not been saved");
        else res.json(individualWorkouts);
    })
};

//updates individualWorkouts
function update(req, res) {
    IndividualWorkouts.findById(req.params.id)
        .then(function(song){
            if(!individualWorkouts) res.send(" individualWorkouts is not found ")
            else return individualWorkouts.updateAttrivutes(req.body);
        })
        .then(function(individualWorkouts){
            res.json(individualWorkouts);
        })
};

//delets individualWorkouts
function destroy(req, res) {
    IndividualWorkouts.findById(req.params.id)
        .then(function(song){
            if(!individualWorkouts) res.send(" individualWorkouts is not found ");
            else return individualWorkouts.destroy();
        })
        .then(function(){
            res.send("individualWorkouts deleted.")
        })
};



module.exports.sendAll = sendAll;
module.exports.sendOne = sendOne;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;