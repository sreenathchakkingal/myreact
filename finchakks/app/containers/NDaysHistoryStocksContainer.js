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
        stocksInfo:[]
      }
    },

    componentDidMount: function()
    {
      finchakksapi.listNDaysHistoryStocks().
      then(function(stocksInfo)
      {
        this.setState({
          isLoading:false,
          stocksInfo: stocksInfo
        })
      }.bind(this))
    },

render: function () {
    return (
      <NDaysHistoryStocks isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = NDaysHistoryStocksContainer;
