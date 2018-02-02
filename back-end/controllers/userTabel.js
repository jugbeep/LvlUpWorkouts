//bringing stuff in form mdels
db = require('../models');
var User = db.models.user;

//get all
function sendAll(req, res) {
    User.findAll().then(function(user){
        res.json(user)
    })
};

//get one
function sendOne(req, res) {
    User.findById(req.params.id)
        .then(function(user){
            if(!user) res.send("user is not found ");
            else res.json(user);
        });   
};

//make a new user
function create(req, res) {
    User.create(req.body).then(function(user){
        if(!user) res.send("user has not been saved");
        else res.json(user);
    })
};

//updates user
function update(req, res) {
    User.findById(req.params.id)
        .then(function(song){
            if(!user) res.send(" user is not found ")
            else return user.updateAttrivutes(req.body);
        });
        .then(function(user){
            res.json(user);
        })
};

//delets user
function destroy(req, res) {
    User.findById(req.params.id)
        .then(function(song){
            if(!user) res.send(" user is not found ");
            else return user.destroy();
        })
        .then(function(){
            res.send("user deleted.")
        })
};

module.exports.sendAll = sendAll;
module.exports.sendOne = sendOne;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;