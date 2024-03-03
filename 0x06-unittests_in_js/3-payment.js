// const { calculateNumber } = require('./utils');
const Utils = require('./utils');

// calculateNumber = calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
