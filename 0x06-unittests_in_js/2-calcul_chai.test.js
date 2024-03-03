const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  it('should return the sum of numbers rounded off', () => {
    // assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6)
  });
  it('should return the difference of numbers rounded off', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4)
  });
  it('should return the division of numbers rounded off', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2)
  });

  it('should return "Error" if rounded b is 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error')
  });
});
