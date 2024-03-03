const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  it('should return the sum of numbers rounded off', function () {
    // assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equals(6)
  });
  it('should return the difference of numbers rounded off', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equals(-4)
  });
  it('should return the division of numbers rounded off', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equals(0.2)
  });

  it('should return "Error" if rounded b is 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equals('Error')
  });
});
