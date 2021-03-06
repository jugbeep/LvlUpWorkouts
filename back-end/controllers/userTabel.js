//bringing stuff in form mdels
db = require('../models');
let User = db.models.User;

/*=============================================
=            sendAll not bing used            =
=============================================*/

//get all
function sendAll(req, res) {
    User.findAll().then(function(user){
        console.log("you hit the sendAll");
        res.json(user)
        //console.log( user[0] );
    })
};

/*=====  End of sendAll not bing used  ======*/


/*===============================================
=            send one not being used            =
===============================================*/

//get one
function sendOne(req, res) {
    User.findById(req.params.id)
        .then(function(user){
            if(!user) res.send("user is not found ");
            else res.json(user);
        });   
};

/*=====  End of send one not being used  ======*/

/*=============================================
=            creat user being used            =
=============================================*/

//make a new user
function create(req, res) {

    // console.log(" ");
    // console.log( "req: " + req);
    // console.log(" ");
    // console.log("req.body: " + req.body);
    // console.log(" ")
    // console.log("req.email: " + req.email);
    // console.log(" ")
    let temp2 = req.body.email;
    // console.log( "req.body.email: " + temp2);
    // console.log(" ")
    // console.log("req.password: " + req.password);
    // console.log(" ")
    // console.log( "req.body.password: " + req.body.password);
    // console.log(" ")

    let temp = {
        name : temp2
    }

    User.create(temp).then(function(user){
        if(!temp) res.send("user has not been saved");
        else res.json(temp);
    })
};


/*=====  End of creat user being used  ======*/

/*=============================================
=            update not being used            =
=============================================*/

//updates user
function update(req, res) {
    User.findById(req.params.id)
        .then(function(song){
            if(!user) res.send(" user is not found ")
            else return user.updateAttrivutes(req.body);
        })
        .then(function(user){
            res.json(user);
        });
};

/*=====  End of update not being used  ======*/

/*=============================================
=            destry not being used            =
=============================================*/

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

/*=====  End of destry not being used  ======*/


/*==============================================
=            cheack user being used            =
==============================================*/

//cheack
function cheack(req, res){
    User.findAll({
        where: {
            name: req.body.email
        }
    })
        .then(function(user){
            if(!user) res.send("there is no acout with this user name");
            else res.json(user);
        });
    
}

/*=====  End of cheack user being used  ======*/



module.exports.sendAll = sendAll;
module.exports.sendOne = sendOne;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
module.exports.cheack = cheack;