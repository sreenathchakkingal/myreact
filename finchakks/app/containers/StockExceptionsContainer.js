var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var sharedFunctions = require('../utils/sharedFunctions')
var StocksException = require('../components/StocksException');

class StockExceptionsContainer extends React.Component {
  constructor (props) {
      super(props)
      this.state =  {
        isLoading : true,
        stocksInfo : []
      }
      this.componentDidMount = this.componentDidMount.bind(this);
  }
     componentDidMount()
     {
      //  var stocksInfoCachedAsStringTemp = localStorage.getItem('listStockExceptions.stocksInfoCachedAsString');
       //
      //  if (sharedFunctions.isInvalidString(stocksInfoCachedAsStringTemp))
      //  {
         console.log('invoking listStockExceptions api');
         finchakksapi.listStockExceptions().
         then(function(stocksInfo)
         {
           localStorage.setItem('listStockExceptions.stocksInfoCachedAsString',  JSON.stringify(stocksInfo) );
           this.setState({
             isLoading:false,
             stocksInfo: stocksInfo
           })
         }.bind(this))
     }

     render() {
         return (
           <StocksException isLoading={this.state.isLoading}
           stocksInfo={this.state.stocksInfo} />
         )
     }

}

module.exports = StockExceptionsContainer;
