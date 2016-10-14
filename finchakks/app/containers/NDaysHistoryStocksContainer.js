var React = require('react');
var NDaysHistoryStocks = require('../components/NDaysHistoryStocks');
var finchakksapi = require('../utils/finchakksapi');

var NDaysHistoryStocksContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

   getInitialState: function () {
      return {
        isLoading: true,
        nDaysWatchlistedStocks:[],
        nDaysMinOrMaxStocks:[]
      }
    },

    componentDidMount: function()
    {
      finchakksapi.listNDaysHistoryStocks().
      then(function(stocksInfo)
      {
        this.setState({
          isLoading:false,
          nDaysWatchlistedStocks: stocksInfo.nDaysWatchlistedStocks,
          nDaysMinOrMaxStocks: stocksInfo.nDaysMinOrMaxStocks
        })
      }.bind(this))
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
