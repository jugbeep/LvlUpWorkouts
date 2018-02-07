var expect = require('chai').expect;
var request = require('request');
var api = 'http://dnd5eapi.co/api';
// var user = '../models/index'; //eventual backend test setup
var local = 'http://localhost:4200/';

// Front End Testing to hit dnd API endpoint monsters checked and working
describe('returns monsters', function() {
	it('returns monsters', function(done) {
		request.get({ url: api + '/monsters/' },
			function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				// console.log(body); //checking in console for returned data
				done();
			});
	});
});

// Front End Testing to hit dnd API endpoint monsters/10 dragon index checked and working
describe('returns a monster at index 10', function() {
	it('returns monsters at index 10', function(done) {
		request.get({ url: api + '/monsters/10' },
			function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				// console.log(body); //checking in console for returned data
				done();
			});
	});
});

// Front End Testing to see if http://localhost:4200 renders the homepage successfully checked and working
describe('Home Page', function() {
  it('Home page status', function(done) {
    request(local, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        console.log('You are home');
        done();
    		});
		});
});



// describe('checking if user model works', function(){
//    describe('new', function() {
//        it('initializes a new user', function(){
//            var user = new User();
//            user = "new user";
//            expect(user).to.equal('new user');
//         });
//     });
//  });


    	




