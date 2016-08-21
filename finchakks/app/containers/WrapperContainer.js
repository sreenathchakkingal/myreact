var React = require('react');
var StockExceptionsContainer = require("./StockExceptionsContainer");
var NDaysHistoryStocksContainer = require("./NDaysHistoryStocksContainer");
var ProfitAndLossContainer = require("./ProfitAndLossContainer");
var TargetReachedStocksContainer = require('./TargetReachedStocksContainer');
var Main  = require("../components/Main");

var WrapperContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        <Main>
          <StockExceptionsContainer/>
          <ProfitAndLossContainer/>
          <TargetReachedStocksContainer/>
          <NDaysHistoryStocksContainer/>
        </Main>
      )
  }

});

module.exports = WrapperContainer;
