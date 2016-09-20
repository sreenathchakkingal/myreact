var React = require('react');
var UnrealizedDetailsSelected = require('../components/UnrealizedDetailsSelected');
var finchakksapi = require('../utils/finchakksapi');


var UnrealizedDetailsSelectedContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
     return {
       isLoading: true,
       stocksInfo:[],
       stockName:''
     }
   },

  componentDidMount: function()
  {
    finchakksapi.listUnrealizedSelectedDetails(this.props.stockName).
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
         <UnrealizedDetailsSelected isLoading={this.state.isLoading}
         stocksInfo={this.state.stocksInfo}/>
      )
    }

});

module.exports = UnrealizedDetailsSelectedContainer;
