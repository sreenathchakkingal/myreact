var prodHost = 'https://finchakks.appspot.com/_ah/api/';
var devHost = 'http://localhost:8888/_ah/api/';

var envIsProd = true;

var helpers = {

  getHost: function()
  {
      return envIsProd ? prodHost : devHost;
  },
};

module.exports = helpers;
