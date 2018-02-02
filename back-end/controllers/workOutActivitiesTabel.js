//bringing stuff in form mdels
db = require('../models');
let WorkOutActivities = db.models.workOutActivities;

//get all
function sendAll(req, res) {
    WorkOutActivities.findAll().then(function(workOutActivities){
        res.json(workOutActivities)
    })
};

//get one
function sendOne(req, res) {
    WorkOutActivities.findById(req.params.id)
        .then(function(workOutActivities){
            if(!workOutActivities) res.send("workOutActivities is not found ");
            else res.json(workOutActivities);
        });   
};

//make a new workOutActivities
function create(req, res) {
    WorkOutActivities.create(req.body).then(function(workOutActivities){
        if(!workOutActivities) res.send("workOutActivities has not been saved");
        else res.json(workOutActivities);
    })
};

//updates workOutActivities
function update(req, res){
    console.log("first");
    WorkOutActivities.findById(req.params.id)
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

//delets workOutActivities
function destroy(req, res) {
    WorkOutActivities.findById(req.params.id)
        .then(function(workOutActivities){
            if(!workOutActivities) res.send(" workOutActivities is not found ");
            else return workOutActivities.destroy();
        })
        .then(function(){
            res.send("workOutActivities deleted.")
        })
};

module.exports.sendAll = sendAll;
module.exports.sendOne = sendOne;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;