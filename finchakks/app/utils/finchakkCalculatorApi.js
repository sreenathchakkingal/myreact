var axios = require('axios');
var querystring = require('querystring');
var prodHost = 'https://finchakks.appspot.com/_ah/api/';
var devHost = 'http://localhost:8888/_ah/api/';

var envIsProd = true;
var host = envIsProd ? prodHost : devHost;

var calculatorEndPoint = host+'calculatorEndPoint/v1/calculateMissingCompoundInterestComponent';

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function getApiWithParamResult(initialAmount, interestRate, durationInDays, finalAmount) {
  return axios.get(calculatorEndPoint,
      {
        params: {
            initialAmount: initialAmount,
            interestRate: interestRate,
            durationInDays: durationInDays,
            finalAmount: finalAmount
        }
      }
    );
}

var helpers = {
  calculateMissingCompoundInterestComponent: function(initialAmount, interestRate, durationInDays, finalAmount) {
    return getApiWithParamResult(initialAmount, interestRate, durationInDays, finalAmount)
    .then(function(response)
    {
      var compoundInterestInfo= response.data;
      console.log('calculateMissingCompoundInterestComponent.compoundInterestInfo.initialAmount', compoundInterestInfo.initialAmount);
      return compoundInterestInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in calculateMissingCompoundInterestComponent ', err);
    });
  }
};

module.exports = helpers;
