 // this is just so I can do soem tests

function sendAll(req, res) {
    console.log("befor in sendAll funciton")
    res.send("test");
    console.log("after in sendAll funciton")
};

function sendOne(req, res) {
    console.log("befor in sendAll funciton")
    res.send("test");
    console.log("after in sendAll funciton")
};

function create(req, res) {
    console.log("befor in sendAll funciton")
    res.send("test");
    console.log("after in sendAll funciton")
};

function update(req, res) {
    console.log("befor in sendAll funciton")
    res.send("test");
    console.log("after in sendAll funciton")
};

function destroy(req, res) {
    console.log("befor in sendAll funciton")
    res.send("test");
    console.log("after in sendAll funciton")
};

module.exports = {
    sendAll : sendAll,
    sendOne : sendOne,
    create : create,
    update : update,
    destroy : destroy
}