var React = require('react');
var UnrealizedSummary = require('../components/UnrealizedSummary');
var finchakksapi = require('../utils/finchakksapi');

var UnrealizedSummaryContainer = React.createClass({
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
      // var stocksInfoCachedAsStringTemp = localStorage.getItem('listUnrealizedSummary.stocksInfoCachedAsString');
      // if(stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp==='null')
      // {
        console.log('invoking listUnrealizedSummary api');
        finchakksapi.listUnrealizedSummary().
        then(function(stocksInfo)
        {
          localStorage.setItem('listUnrealizedSummary.stocksInfoCachedAsString', JSON.stringify(stocksInfo));
          this.setState({
            isLoading:false,
            stocksInfo: stocksInfo
          })
        }.bind(this))
      // }
      // else
      // {
      //   console.log('using cached result instead of listUnrealizedSummary api call');
      //   var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
      //   this.setState({
      //     isLoading:false,
      //     stocksInfo: stocksInfoCached
      //   })
      // }

    },

render: function () {
    return (
      <UnrealizedSummary isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = UnrealizedSummaryContainer;
