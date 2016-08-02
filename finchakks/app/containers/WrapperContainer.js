var React = require('react');
var ListBlackListedStocksContainer = require("./ListBlackListedStocksContainer");
var StockExceptionsContainer = require("./StockExceptionsContainer");
var NDaysHistoryStocksContainer = require("./NDaysHistoryStocksContainer");
var UnrealizedDetailsContainer = require("./UnrealizedDetailsContainer");
var ProfitAndLossContainer = require("./ProfitAndLossContainer");
var Main  = require("../components/Main");
var PageHeader = require('react-bootstrap/lib/PageHeader');

var WrapperContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        <Main>
          <StockExceptionsContainer/>

          <PageHeader>Summary</PageHeader>
          <ProfitAndLossContainer/>

          <PageHeader>Black List</PageHeader>
          <ListBlackListedStocksContainer/>

          <PageHeader>Watch List </PageHeader>
          <NDaysHistoryStocksContainer/>

          <PageHeader>Unrealized</PageHeader>
          <UnrealizedDetailsContainer/>

        </Main>
      )
  }

});

module.exports = WrapperContainer;
