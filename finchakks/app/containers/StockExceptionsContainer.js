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
       var stocksInfoCachedAsStringTemp = localStorage.getItem('listStockExceptions.stocksInfoCachedAsString');

       if (stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp==='null' || stocksInfoCachedAsStringTemp === 'undefined')
       {
         console.log('invoking listStockExceptions api');
         finchakksapi.listStockExceptions().
         then(function(stocksInfo)
         {
           localStorage.setItem('listStockExceptions.stocksInfoCachedAsString',  JSON.stringify(stocksInfo) );
           this.setState({
             isLoading:false,
             stocksInfo: stocksInfo
           })
         }.bind(this))
       }
       else
       {
         console.log('using cached result instead of listStockExceptions api call');
         var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
         this.setState({
           isLoading:false,
           stocksInfo: stocksInfoCached
         })
       }

     },

     render: function () {
      return (
        <StocksException isLoading={this.state.isLoading}
        stocksInfo={this.state.stocksInfo} />
      )
  }

});

module.exports = StockExceptionsContainer;
