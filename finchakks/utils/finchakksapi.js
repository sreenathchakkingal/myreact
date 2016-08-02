var axios = require('axios');
var param = "";

function listBlackListedStocks() {
    return axios.get('https://finchakks.appspot.com/_ah/api/initalizeControllerEndPoint/v1/unrealizedsummarydbobject');
}


var helpers = {

  listBlackListedStocks: function() {

    var listBlackListedStocks = listBlackListedStocks();
    return axios.all(listBlackListedStocks)//waits for the promises to be completed
      .then(function(listBlackListedStocks) {
          console.log(listBlackListedStocks);
          return listBlackListedStocks;
      })
      .catch(function (err) {console.warn('Error in listBlackListedStocks: ', err)})
  }
};

module.exports = helpers;
