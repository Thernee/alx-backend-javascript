const chai = require('chai');
expect  = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe("getPaymentTokenFromAPI", () => {
  it("should return object when promise is resolved", (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result.data).to.be.equal('Successful response from the API');
        done();
      });
  });
});
