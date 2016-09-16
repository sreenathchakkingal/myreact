var axios = require('axios');
var querystring = require('querystring');
var prodHost = 'https://finchakks.appspot.com/_ah/api/';
var devHost = 'http://localhost:8888/_ah/api/';

var envIsProd = true;
var host = envIsProd ? prodHost : devHost;

var maintEndPoint = host+'maintainanceControllerEndPoint/v1/';
//mock
// var stocksInfo=
// [
//  {
//   "stockName": "BATAINDIA",
//   "exceptionComment" : "BATAINDIA"
//  },
//  {
//   "stockName": "BATAINDIA1",
//   "exceptionComment" : "BATAINDIA1"
//  }
// ]


function getInitializeApiResult(methodName) {
    return axios.get(host+'initalizeControllerEndPoint/v1/' +methodName);
}

function getMaintApiResult(methodName) {
    return axios.get(maintEndPoint +methodName);
}

function postMaintApiResult(stockName, moneycontrolName,
   isWatchListed, lowerReturnPercentTarget, upperReturnPercentTarget, stockRatings) {
  return axios.post(host+'maintainanceControllerEndPoint/v1/updateStockAttributes',
      querystring.stringify({
              stockName: stockName,
              moneycontrolName: moneycontrolName,
              isWatchListed: isWatchListed,
              lowerReturnPercentTarget: lowerReturnPercentTarget,
              upperReturnPercentTarget: upperReturnPercentTarget,
              stockRatings: stockRatings
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

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
    if(stockName === null || stockName ==='')
    {
      stockName='BPCL'
      console.log('getModifiableStockAttributes.DEFUALTING');
    }
    return getMaintApiResult('getModifiableStockAttributes?stockName='+stockName)
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

  updateStockAttributes: function(stockName, moneycontrolName,
     isWatchListed, lowerReturnPercentTarget, upperReturnPercentTarget, stockRatings) {

        console.log('updateStockAttributes.stockName ', stockName);
        console.log('updateStockAttributes.moneycontrolName ', moneycontrolName);
        console.log('updateStockAttributes.isWatchListed ', isWatchListed);
        console.log('updateStockAttributes.lowerReturnPercentTarget ', lowerReturnPercentTarget);
        console.log('updateStockAttributes.upperReturnPercentTarget ', upperReturnPercentTarget);
        for(var i=0; i<=stockRatings.length ; i ++)
        {
        console.log('updateStockAttributes.stockRatings ', stockRatings[i]);
        }


    return postMaintApiResult(stockName, moneycontrolName,
       isWatchListed, lowerReturnPercentTarget, upperReturnPercentTarget, stockRatings)
    .then(function(response)
    {
      return response.data;
    })
    .catch(function(err)
    {
        console.warn('Error in updateStockAttributes ', err);
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
