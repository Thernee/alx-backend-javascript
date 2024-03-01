const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const indexPage = require('../../controllers/app.controller');

// const user = {
//   addUser: (name) => {
//     this.name = name;
//   }
// }

// describe("getIndexPage", function() {
//   it("should return index page", function() {
//     let req = {};
//     let res = {
//       send: sinon.spy()
//     }

//     indexPage.getIndexPage(req, res);
//     console.log(res.send);

//     expect(res.send.calledOnce).to.be.true;
//     expect(res.send.firstCall.args[0]).to.equal('Hey')
//       });
//     });

// describe("User", function() {
//   describe("AddUser", function() {
//     it("should add user", function() {
//       sinon.spy(user, "addUser")
//       user.addUser('John Doe')
//       console.log(user.addUser);

//       expect(user.addUser.calledOnce).to.be.true;
//     });
//   });
// });

describe('appController', function () {
  describe('getIndexPage', function () {
    it('should send hey when user is logged in', function () {
      const user = {
        isLoggedIn: function () {}
      };

      isLoggedInStub = sinon.stub(user, 'isLoggedIn').returns(true);
    });
  });
});
