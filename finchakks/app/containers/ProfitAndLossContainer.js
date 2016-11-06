var React = require('react');
var ProfitAndLoss = require('../components/ProfitAndLoss');
var finchakksapi = require('../utils/finchakksapi');

var ProfitAndLossContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

   getInitialState: function () {
      return {
        isLoading: true
      }
    },

    componentDidMount: function()
    {
      var stocksInfoCachedAsStringTemp = localStorage.getItem('listprofitAndloss.stocksInfoCachedAsString');
      if (stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp=='null')
      {
        console.log('invoking listprofitAndloss api');
        finchakksapi.listprofitAndloss().
        then(function(stocksInfo)
        {
          localStorage.setItem('listprofitAndloss.stocksInfoCachedAsString', JSON.stringify(stocksInfo));
          this.setState({
            isLoading:false,
            stocksInfo: stocksInfo
          })
        }.bind(this))
      }
      else
      {
        console.log('using cached result instead of listprofitAndloss api call');
        var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
        this.setState({
          isLoading:false,
          stocksInfo: stocksInfoCached
        })
      }
    },

render: function () {
    return (
      <ProfitAndLoss isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = ProfitAndLossContainer;
