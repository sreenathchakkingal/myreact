var React = require('react');
var UnrealizedDetails = require('../components/UnrealizedDetails');
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
      finchakksapi.listUnrealizedSummary().
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
      <UnrealizedDetails isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = UnrealizedSummaryContainer;
