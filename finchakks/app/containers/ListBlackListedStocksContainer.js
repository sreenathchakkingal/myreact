var React = require('react');
var ListBlackListedStocks = require('../components/ListBlackListedStocks');
var finchakksapi = require('../utils/finchakksapi');

var ListBlackListedStocksContainer = React.createClass({
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
      finchakksapi.listBlackListedStocks().
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
      <ListBlackListedStocks isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = ListBlackListedStocksContainer;
