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
    var stockNameTemp=this.props.stockName;
    var keyName='listUnrealizedSelected.stocksInfoCachedAsString.'+stockNameTemp
    var stocksInfoCachedAsStringTemp = localStorage.getItem(keyName);
    if(stocksInfoCachedAsStringTemp == null || stocksInfoCachedAsStringTemp==='null')
    {
      console.log('invoking listUnrealizedSelected api');
      finchakksapi.listUnrealizedSelected(stockNameTemp).
      then(function(stocksInfo)
      {
        localStorage.setItem(keyName, JSON.stringify(stocksInfo));
        summaryDbObjectTemp=typeof stocksInfo.summaryDbObject==='undefined' ? {} : stocksInfo.summaryDbObject;
        detailDbObjectsTemp=typeof stocksInfo.detailDbObjects==='undefined' ? [] : stocksInfo.detailDbObjects;
        this.setState({
          isLoading:false,
          stockSummary: summaryDbObjectTemp,
          stockDetail: detailDbObjectsTemp
        })
      }.bind(this))
    }
    else
    {
      console.log('using cached result instead of listUnrealizedSelected api call');
      var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
      summaryDbObjectCachedTemp= stocksInfoCached.summaryDbObject;
      detailDbObjectsCachedTemp= stocksInfoCached.detailDbObjects;
      this.setState({
        isLoading:false,
        stockSummary: summaryDbObjectCachedTemp,
        stockDetail: detailDbObjectsCachedTemp
      })
    }

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
