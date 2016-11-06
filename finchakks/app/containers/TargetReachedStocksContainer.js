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
      var stocksInfoCachedAsStringTemp = localStorage.getItem('listTargetReachedStocks.stocksInfoCachedAsString');
      if(stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp==='null')
      {
        console.log('invoking listTargetReachedStocks api');
        finchakksapi.listTargetReachedStocks().
        then(function(stocksInfo)
        {
          localStorage.setItem('listTargetReachedStocks.stocksInfoCachedAsString', JSON.stringify(stocksInfo));
          this.setState({
            isLoading:false,
            stocksInfo: stocksInfo
          })
        }.bind(this))
      }
      else
      {
        console.log('using cached result instead of listTargetReachedStocks api call');
        var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
        this.setState({
          isLoading:false,
          stocksInfo: stocksInfoCached
        })
      }

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
