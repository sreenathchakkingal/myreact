var React = require('react');
var MaintStockAttributes  = require('../components/MaintStockAttributes');
var finchakksapi = require('../utils/finchakksapi');

var MaintStockAttributesContainer = React.createClass({
  getInitialState: function () {
     return {
       stockName: '',
       stocksInfo:[],
       isStocksInfoRetrieving: false,
       isStocksInfoRetrieved: false
     }
   },

  handleChange(e) {
    this.setState({ stockName: e.target.value });
  },

  handleSubmit() {
    var stockNameTemp = this.state.stockName  ;
    this.setState(
      {
        stockName: stockNameTemp,
        stocksInfo:[],
        isStocksInfoRetrieving: true,
        isStocksInfoRetrieved: false
      }
    );

    finchakksapi.getModifiableStockAttributes(stockNameTemp).
    then(function(stocksInfoResult)
    {
      this.setState({
        stockName: stockNameTemp,
        stocksInfo: stocksInfoResult,
        isStocksInfoRetrieving:false,
        isStocksInfoRetrieved: true
      })
    }.bind(this))
  },

  render: function () {
      return (
        <MaintStockAttributes
        isStocksInfoRetrieving={this.state.isStocksInfoRetrieving}
        onStockNameSubmit={this.handleSubmit}
        onCaptureChange={this.handleChange}
        stocksInfo={this.state.stocksInfo}
        isStocksInfoRetrieved={this.state.isStocksInfoRetrieved}
        />
      )
    }

  });

module.exports = MaintStockAttributesContainer;
