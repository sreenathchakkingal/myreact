var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var StocksException = require('../components/StocksException');

var StockExceptionsContainer = React.createClass({
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
       finchakksapi.listStockExceptions().
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
        <StocksException isLoading={this.state.isLoading}
        stocksInfo={this.state.stocksInfo} />
      )
  }

});

module.exports = StockExceptionsContainer;
