var React = require('react');
var UnrealizedDetailsContainer = require("./UnrealizedDetailsContainer");
var UnrealizedSummaryContainer = require("./UnrealizedSummaryContainer");
var ProfitAndLossContainer = require("./ProfitAndLossContainer");
var TargetReachedStocksContainer = require("./TargetReachedStocksContainer");
var Main  = require("../components/Main");

var InvestmentContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        <Main>
          <ProfitAndLossContainer/>
          <TargetReachedStocksContainer/>
          <UnrealizedDetailsContainer/>
          <UnrealizedSummaryContainer/>
        </Main>
      )
  }

});

module.exports = InvestmentContainer;
