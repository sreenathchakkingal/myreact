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
        stocksWithoutMin:[],
        stocksWithMin:[]
      }
    },

    componentDidMount: function()
    {
      finchakksapi.listNDaysHistoryStocks().
      then(function(stocksInfo)
      {
        this.setState({
          isLoading:false,
          stocksWithoutMin: stocksInfo.stocksWithoutMinimum,
          stocksWithMin: stocksInfo.stocksMinimum
        })
      }.bind(this))
    },

render: function () {
    return (
      <NDaysHistoryStocks isLoading={this.state.isLoading}
      stocksWithoutMin={this.state.stocksWithoutMin}
      stocksWithMin={this.state.stocksWithMin}
      />
    )
  }

});

module.exports = NDaysHistoryStocksContainer;
