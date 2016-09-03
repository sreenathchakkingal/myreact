var axios = require('axios');

var maintEndPoint = 'https://finchakks.appspot.com/_ah/api/maintainanceControllerEndPoint/v1/';

function getInitializeApiResult(methodName) {
    return axios.get('https://finchakks.appspot.com/_ah/api/initalizeControllerEndPoint/v1/' +methodName);
}

function getMaintApiResult(methodName) {
    return axios.get(maintEndPoint +methodName);
}

function putMaintApiResult(isWatchListedTemp, stockNameTemp) {
  return axios.post('https://finchakks.appspot.com/_ah/api/maintainanceControllerEndPoint/v1/updateStockAttributes?isWatchListed=isWatchListed&stockName=isWatchListed');
}

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

var helpers = {
  listprofitAndloss: function() {
    return getInitializeApiResult('profitandlossdbobject')
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

  updateStockAttributes: function(stockName, isWatchListed) {
    return putMaintApiResult('updateStockAttributes?isWatchListed'+isWatchListed+'&stockName='+stockName)
    .then(function(response)
    {
      return response.data;
    })
    .catch(function(err)
    {
        console.warn('Error in updateStockAttributes ', err);
    });
  },

  listStockTargets: function() {
    return getInitializeApiResult('listStockTargets')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listStockTargets ', err);
    });
  },

  getModifiableStockAttributes: function(stockName) {
    return getMaintApiResult('getModifiableStockAttributes?stockName='+'BPCL')
    .then(function(response)
    {
      var stocksInfo= response.data;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in getModifiableStockAttributes ', err);
    });
  },

  listBlackListedStocks: function() {
    return getInitializeApiResult('listBlackListedStocks')
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


  listTargetReachedStocks: function() {
    return getInitializeApiResult('listTargetReachedStocks')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listTargetReachedStocks ', err);
    });
  },

  listStockExceptions: function() {
    return getInitializeApiResult('stockexceptiondbobject')
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

    return getInitializeApiResult('ndayshistoryflatteneddbobject')
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
    return getInitializeApiResult('unrealizeddetaildbobject')
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
    return getInitializeApiResult('listUnrealizedSummaryStocks')
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
    return getInitializeApiResult('unrealizeddetaildbobject/'+stockName)
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
