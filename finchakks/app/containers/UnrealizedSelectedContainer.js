var React = require('react');
var UnrealizedSelected = require('../components/UnrealizedSelected');
var finchakksapi = require('../utils/finchakksapi');

var UnrealizedSelectedContainer = React.createClass({
  getInitialState: function () {
     return {
       isLoading: true,
       stockName:'',
       stockSummary:{},
       stockDetail:[]
     }
   },

  componentDidMount: function()
  {
    finchakksapi.listUnrealizedSelected(this.props.stockName).
    then(function(stocksInfo)
    {
      this.setState({
        isLoading:false,
        stockName: stocksInfo.summaryDbObject.stockName,
        stockSummary: stocksInfo.summaryDbObject,
        stockDetail: stocksInfo.detailDbObjects
      })
    }.bind(this))
  },

  render: function () {
       return (
         <UnrealizedSelected  isLoading={this.state.isLoading}
         stockName={this.state.stockName}
         stockSummary={this.state.stockSummary}
         stockDetail={this.state.stockDetail}
         />
      )
    }
});

module.exports = UnrealizedSelectedContainer;
