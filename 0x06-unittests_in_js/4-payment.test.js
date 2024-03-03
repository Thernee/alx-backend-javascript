const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should validate the usage of the Utils function', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith("The total is: 10")).to.be.true;

    stub.restore();
    consoleLogSpy.restore();
  });
});
