var axios = require('axios');
var querystring = require('querystring');
var prodHost = 'https://finchakks.appspot.com/_ah/api/';
var devHost = 'http://localhost:8888/_ah/api/';

var envIsProd = true;
var host = envIsProd ? prodHost : devHost;

var maintEndPoint = host+'maintainanceControllerEndPoint/v1/';
var listNDaysHistoryStocksResultCache={};
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


function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function getInitializeApiResult(methodName) {
    return axios.get(host+'initalizeControllerEndPoint/v1/' +methodName);
}

function getInitializeApiWithParamResult(methodName, stockName) {
  return axios.get(host+'initalizeControllerEndPoint/v1/'+methodName,
      {
        params: {
            stockName: stockName
        }
      }
    );
}

function getMaintApiResult(methodName) {
    return axios.get(maintEndPoint +methodName);
}

function updateStockAttributesApi(stockName, moneycontrolName,
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

function uploadUnrealizedApi(unrealized) {
  return axios.post(host+'maintainanceControllerEndPoint/v1/uploadUnrealized',
      querystring.stringify({
              unrealized: unrealized
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
}

function refreshApi() {
  return axios.post(host+'maintainanceControllerEndPoint/v1/refresh');
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

  refresh: function() {
    return refreshApi()
    .then(function(response)
    {
        return response.data;
    })
    .catch(function(err)
    {
        console.warn('Error in refresh ', err);
    });
  },

  uploadUnrealized: function(commaSeperatedUnrealized) {
        return uploadUnrealizedApi(commaSeperatedUnrealized)
        .then(function(response)
        {
          return response.data;
        })
        .catch(function(err)
        {
            var errorMessage = "Status: "err.status+" Messge:  "+err.statusText;
            var errorReponseData =
            {
              success: false,
              statusMessage: errorMessage,
            };

            console.warn('Error in uploadUnrealized ',err);
            return errorReponseData;
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

      return updateStockAttributesApi(stockName, moneycontrolName,
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
    if(listNDaysHistoryStocksResultCache === 0)
    {
      return listNDaysHistoryStocksResultCache;
    }
    else
    {
      return getInitializeApiResult('listNDaysHistoryFlattenedStocks')
      .then(function(response)
      {
        var stocksInfo= response.data;
        listNDaysHistoryStocksResultCache = stocksInfo;
        return stocksInfo;
      })
      .catch(function(err)
      {
          console.warn('Error in listNDaysHistoryStocks ', err);
      });
    }
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

  listUnrealizedSelected: function(stockName) {
    return getInitializeApiResult('listSelectedUnrealized?stockName='+stockName)
    .then(function(response)
    {
      var stocksInfo= response.data;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listUnrealizedSelected ', err);
    });
  },

  listTargetHistorySelected: function(stockName) {
    return getInitializeApiWithParamResult('listSelectedTargetHistory', stockName)
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listTargetHistorySelected ', err);
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
  },

  listTopMovingStocks: function() {
    return getInitializeApiResult('listStockSummaryDiffs')
    .then(function(response)
    {
      var stocksInfo= response.data.items;
      console.log('listTopMovingStocks.response.data.items: ',response.data.items);
      return stocksInfo;
    })
    .catch(function(err)
    {
        console.warn('Error in listStockSummaryDiffs ', err);
    });
  },

};

module.exports = helpers;
