var React = require('react');
var NDaysHistoryStocks = require('../components/NDaysHistoryStocks');
var finchakksapi = require('../utils/finchakksapi');

var NDaysHistoryStocksContainer = React.createClass({
   getInitialState: function () {
      return {
        isLoading: true,
        nDaysWatchlistedStocks:[],
        nDaysMinOrMaxStocks:[]
      }
    },

    componentDidMount: function()
    {
      var stocksInfoCachedAsStringTemp = localStorage.getItem('listNDaysHistoryStocks.stocksInfoCachedAsString');
      if(stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp==='null')
      {
        console.log('invoking listNDaysHistoryStocks api');
        finchakksapi.listNDaysHistoryStocks().
        then(function(stocksInfo)
        {
          localStorage.setItem('listNDaysHistoryStocks.stocksInfoCachedAsString', JSON.stringify(stocksInfo));

          this.setState({
            isLoading:false,
            nDaysWatchlistedStocks: stocksInfo.nDaysWatchlistedStocks,
            nDaysMinOrMaxStocks: stocksInfo.nDaysMinOrMaxStocks
          })
        }.bind(this))
      }
      else
      {
        console.log('using cached result instead of listNDaysHistoryStocks api call');
        var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
        this.setState({
          isLoading:false,
          nDaysWatchlistedStocks: stocksInfoCached.nDaysWatchlistedStocks,
          nDaysMinOrMaxStocks: stocksInfoCached.nDaysMinOrMaxStocks
        })
      }
    },

render: function () {
    return (
      <NDaysHistoryStocks isLoading={this.state.isLoading}
      nDaysWatchlistedStocks={this.state.nDaysWatchlistedStocks}
      nDaysMinOrMaxStocks={this.state.nDaysMinOrMaxStocks}
      />
    )
  }

});

module.exports = NDaysHistoryStocksContainer;
