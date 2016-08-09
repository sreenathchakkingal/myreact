var axios = require('axios');

function getApiResult(methodName) {
    return axios.get('https://finchakks.appspot.com/_ah/api/initalizeControllerEndPoint/v1/' +methodName);
}

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

var helpers = {
  listprofitAndloss: function() {
    return getApiResult('profitandlossdbobject')
    .then(function(response)
    {
      var stocksInfo= response.data;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listprofitAndloss ', err);
    });
  },

  listBlackListedStocks: function() {
    return getApiResult('listBlackListedStocks')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listBlackListedStocks ', err);
    });
  },

  listStockExceptions: function() {
    return getApiResult('stockexceptiondbobject')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listStockExceptions ', err);
    });
  },

  listNDaysHistoryStocks: function() {

    return getApiResult('ndayshistoryflatteneddbobject')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listNDaysHistoryStocks ', err);
    });


  /*  var hardCodedResult=[
      {
       "stockName": "BPCL",
       "stockRatingValue": "3/9",
       "investmentRatio": 0.0065246583,
       "industryInvestmentRatio": 0.0065246583,
       "sellPrice": 586.55,
       "simpleMovingAverage": 867.549,
       "simpleMovingAverageAndSellDeltaNormalized": -32.389988,
       "netNDaysGain": -0.0023009311,
       "industry": "Refineries/ Petro-Products",
       "nDay1Gain": 3.030037,
       "nDay2Gain": -0.6283883,
       "nDay3Gain": -2.5647495,
       "nDay4Gain": 0.32902238,
       "nDay5Gain": 1.5159364,
       "nDay6Gain": -0.79864275,
       "kind": "initalizeControllerEndPoint#resourcesItem"
      },
      {
       "stockName": "ICICIBANK",
       "stockRatingValue": "5/9",
       "investmentRatio": 0.016842855,
       "industryInvestmentRatio": 0.1387367,
       "sellPrice": 245.95,
       "simpleMovingAverage": 249.51398,
       "simpleMovingAverageAndSellDeltaNormalized": -1.4283689,
       "netNDaysGain": -0.093060166,
       "industry": "Banks",
       "nDay1Gain": 2.3299315,
       "nDay2Gain": -0.7228418,
       "nDay3Gain": -1.6833656,
       "nDay4Gain": -5.096993,
       "nDay5Gain": -3.3455904,
       "nDay6Gain": 0.5173665,
       "kind": "initalizeControllerEndPoint#resourcesItem"
      }
    ];

  return hardCodedResult; */
  },

  listUnrealizedDetails: function() {
    return getApiResult('unrealizeddetaildbobject')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listUnrealizedDetails ', err);
    });
  },

  listUnrealizedSummary: function() {
    return getApiResult('listUnrealizedSummaryStocks')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listUnrealizedSummary', err);
    });
  },


  listUnrealizedSelectedDetails: function(stockName) {
    return getApiResult('unrealizeddetaildbobject/'+stockName)
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listUnrealizedDetails ', err);
    });
  }

};

module.exports = helpers;
