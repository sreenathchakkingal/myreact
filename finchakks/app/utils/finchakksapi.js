var axios = require('axios');
var param = "";

function getApiResult(methodName) {
    return axios.get('https://finchakks.appspot.com/_ah/api/initalizeControllerEndPoint/v1/' +methodName);
}

var helpers = {

  listBlackListedStocks: function() {
    return getApiResult('unrealizedsummarydbobject')
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
        console.warn('Error in listNDaysHistoryStocks ', err);
    });
  }
};

module.exports = helpers;
