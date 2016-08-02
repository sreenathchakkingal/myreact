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
      finchakksapi.listprofitAndloss().
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
      <ProfitAndLoss isLoading={this.state.isLoading}
      stocksInfo={this.state.stocksInfo}
      />
    )
  }

});

module.exports = ProfitAndLossContainer;
