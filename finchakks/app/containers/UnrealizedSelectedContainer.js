var React = require('react');
var UnrealizedSelected = require('../components/UnrealizedSelected');
var finchakksapi = require('../utils/finchakksapi');
var sharedFunctions = require('../utils/sharedFunctions');

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
    // var stocksInfoCachedAsStringTemp = localStorage.getItem(keyName);
    // if(sharedFunctions.isInvalidString(stocksInfoCachedAsStringTemp))
    // {
      console.log('invoking listUnrealizedSelected api');
      finchakksapi.listUnrealizedSelected(stockNameTemp).
      then(function(stocksInfo)
      {
        localStorage.setItem(keyName, JSON.stringify(stocksInfo));
        summaryDbObjectTemp=sharedFunctions.nullSafeObject(stocksInfo.summaryDbObject);
        detailDbObjectsTemp=sharedFunctions.nullSafeArray(stocksInfo.detailDbObjects);
        this.setState({
          isLoading:false,
          stockSummary: summaryDbObjectTemp,
          stockDetail: detailDbObjectsTemp
        })
      }.bind(this))
    // }
    // else
    // {
    //   console.log('using cached result instead of listUnrealizedSelected api call');
    //   var stocksInfoCached = JSON.parse(stocksInfoCachedAsStringTemp);
    //   summaryDbObjectCachedTemp= stocksInfoCached.summaryDbObject;
    //   detailDbObjectsCachedTemp= stocksInfoCached.detailDbObjects;
    //   this.setState({
    //     isLoading:false,
    //     stockSummary: summaryDbObjectCachedTemp,
    //     stockDetail: detailDbObjectsCachedTemp
    //   })
    // }

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
