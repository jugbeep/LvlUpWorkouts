const expect = require('chai').expect;
const request = require('request');
const User = require('./models/user');
const Workout = require('./models/workout');

describe('User', function () {
    describe('Constructor', function () {
        let user = new User({ name: 'name'});
    it("should create a new object", function() {   
      expect(user.name).to.equal('name');
    });
    
    it("should have a name", function () {
    	expect(user.name).to.not.be.empty;
    });

    });
});

describe('Workout', function () {
    describe('Constructor', function () {
        let workout = new Workout({ name: 'name'});
    it("should create a new object", function() {   
      expect(workout.name).to.equal('name');
    });
    
    it("should have a name", function () {
        expect(workout.name).to.not.be.empty;
    });

    });
});
