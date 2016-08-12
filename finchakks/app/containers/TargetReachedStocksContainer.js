var React = require('react');
var TargetReachedStocks  = require('../components/TargetReachedStocks');
var finchakksapi = require('../utils/finchakksapi');

var TargetReachedStocksContainer = React.createClass({
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
      finchakksapi.listTargetReachedStocks().
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
      <TargetReachedStocks isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = TargetReachedStocksContainer;
