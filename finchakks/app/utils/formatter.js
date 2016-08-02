var axios = require('axios');
var numeral = require('numeral');

function format(num, requiredFormat) {
    return numeral(num).format(requiredFormat);
}

var helpers = {
  convertToPercent: function(num) {
    return format(num, '0.00%');
  },

  appendPercent: function(num) {
    return format(num/100, '0.0%');
  },

  appendPercentRoundedOff: function(num) {
    return format(num/100, '0%');
  },

  convertToPercentRoundedOff: function(num) {
    return format(num, '0%');
  },

  moneyFormat: function(num) {
    return format(num, '0,0');
  },

};

module.exports = helpers;
