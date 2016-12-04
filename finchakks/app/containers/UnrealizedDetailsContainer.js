var React = require('react');
var UnrealizedDetails = require('../components/UnrealizedDetails');
var finchakksapi = require('../utils/finchakksapi');
var sharedFunctions = require('../utils/sharedFunctions');

var UnrealizedDetailsContainer = React.createClass({
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
      var stocksInfoCachedAsStringTemp = localStorage.getItem('listUnrealizedDetails.stocksInfoCachedAsString');
      if(sharedFunctions.isInvalidString(stocksInfoCachedAsStringTemp))
      {
        console.log('invoking listUnrealizedDetails api');
        finchakksapi.listUnrealizedDetails().
        then(function(stocksInfo)
        {
          localStorage.setItem('listUnrealizedDetails.stocksInfoCachedAsString', JSON.stringify(stocksInfo));
          this.setState({
            isLoading:false,
            stocksInfo: stocksInfo
          })
        }.bind(this))
      }
      else
      {
        console.log('using cached result instead of listUnrealizedDetails api call');
        var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
        this.setState({
          isLoading:false,
          stocksInfo: stocksInfoCached
        })
      }

    },

render: function () {
    return (
      <UnrealizedDetails isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = UnrealizedDetailsContainer;
