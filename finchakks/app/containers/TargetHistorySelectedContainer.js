var React = require('react');
var TargetHistorySelected = require('../components/TargetHistorySelected');
var finchakksapi = require('../utils/finchakksapi');


var TargetHistorySelectedContainer = React.createClass({

  getInitialState: function () {
     return {
       isLoading: true,
       stocksInfo:[],
       stockName:''
     }
   },

  componentDidMount: function()
  {
    finchakksapi.listTargetHistorySelected(this.props.stockName).
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
         <TargetHistorySelected isLoading={this.state.isLoading}
         stocksInfo={this.state.stocksInfo}/>
      )
    }
});

module.exports = TargetHistorySelectedContainer;
