var expect = require('chai').expect;
var request = require('request');
var baseUrl = 'http://dnd5eapi.co/api';

// Front End Testing to hit dnd API endpoint monsters checked and working
describe('returns monsters', function() {
	it('returns monsters', function(done) {
		request.get({ url: baseUrl + '/monsters/' },
			function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				console.log(body);
				done();
			});
	});
});

// Front End Testing to hit dnd API endpoint monsters/3 dragon index checked and working
describe('returns a monster at index 3', function() {
	it('returns monsters at index 3', function(done) {
		request.get({ url: baseUrl + '/monsters/3' },
			function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				console.log(body);
				done();
			});
	});
});




