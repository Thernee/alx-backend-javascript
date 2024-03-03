const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should validate the usage of the Utils function', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledOnce).to.be.true;
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    spy.calculateNumber.restore();
  });
});
