var React = require('react');
var TopMovingStocks = require('../components/TopMovingStocks');
var finchakksapi = require('../utils/finchakksapi');

var TopMovingStocksContainer = React.createClass({

   getInitialState: function () {
      return {
        isLoading: true,
        stocksInfo:[]
      }
    },

    componentDidMount: function()
    {
      // var stocksInfoCachedAsStringTemp = localStorage.getItem('listTopMovingStocks.stocksInfoCachedAsString');
      // if(stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp==='null')
      // {
        console.log('invoking listTopMovingStocks api');
        finchakksapi.listTopMovingStocks().
        then(function(stocksInfo)
        {
          localStorage.setItem('listTopMovingStocks.stocksInfoCachedAsString', JSON.stringify(stocksInfo));
          this.setState({
            isLoading:false,
            stocksInfo: stocksInfo
          })
        }.bind(this))
      // }
      // else
      // {
      //   console.log('using cached result instead of listTopMovingStocks api call');
      //   var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
      //   this.setState({
      //     isLoading:false,
      //     stocksInfo: stocksInfoCached
      //   })
      // }

    },

render: function () {
    return (
      <TopMovingStocks isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = TopMovingStocksContainer;
