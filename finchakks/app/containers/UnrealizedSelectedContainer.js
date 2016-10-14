var React = require('react');
var UnrealizedSelected = require('../components/UnrealizedSelected');
var finchakksapi = require('../utils/finchakksapi');

var UnrealizedSelectedContainer = React.createClass({
  getInitialState: function () {
     return {
       isLoading: true,
       stockSummary:{},
       stockDetail:[]
     }
   },

  componentDidMount: function()
  {
    finchakksapi.listUnrealizedSelected(this.props.stockName).
    then(function(stocksInfo)
    {
      summaryDbObjectTemp=typeof stocksInfo.summaryDbObject==='undefined' ? {} : stocksInfo.summaryDbObject;
      detailDbObjectsTemp=typeof stocksInfo.detailDbObjects==='undefined' ? [] : stocksInfo.detailDbObjects;
      this.setState({
        isLoading:false,
        stockSummary: summaryDbObjectTemp,
        stockDetail: detailDbObjectsTemp
      })
    }.bind(this))
  },

  render: function () {
       return (
         <UnrealizedSelected  isLoading={this.state.isLoading}
         stockName={this.props.stockName}
         stockSummary={this.state.stockSummary}
         stockDetail={this.state.stockDetail}
         />
      )
    }
});

module.exports = UnrealizedSelectedContainer;
