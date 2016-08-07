var React = require('react');
var ListBlackListedStocksContainer = require("./ListBlackListedStocksContainer");
var StockExceptionsContainer = require("./StockExceptionsContainer");
var NDaysHistoryStocksContainer = require("./NDaysHistoryStocksContainer");
var UnrealizedDetailsContainer = require("./UnrealizedDetailsContainer");
var ProfitAndLossContainer = require("./ProfitAndLossContainer");
var Main  = require("../components/Main");
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

var WrapperContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        <Main>
          <StockExceptionsContainer/>
          <ProfitAndLossContainer/>
          <ListBlackListedStocksContainer/>
          <NDaysHistoryStocksContainer/>
        </Main>
      )
  }

});

module.exports = WrapperContainer;
