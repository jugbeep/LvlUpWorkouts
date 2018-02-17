let expect = require('chai').expect;
let request = require('request');
let nock = require('nock');
let Workout = require('../models/workout');
let server = require('../server')
// describe('User', function () {
//     describe('Constructor', function () {
//         let user = new User({ name: 'name'});
//     it("should create a new object", function() {   
//       expect(user.name).to.equal('name');
//     });
    
//     it("should have a name", function () {
//     	expect(user.name).to.not.be.empty;
//     });

//     });
// });
describe('Get User tests', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/workouts')
      expect.reply.to.be(200, response);
  });
  it('Get a user by username', () => {
  
      expect(typeof response).to.equal('object');

      });
  });
