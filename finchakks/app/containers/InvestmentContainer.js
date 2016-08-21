var React = require('react');
var UnrealizedDetailsContainer = require("./UnrealizedDetailsContainer");
var UnrealizedSummaryContainer = require("./UnrealizedSummaryContainer");
var ProfitAndLossContainer = require("./ProfitAndLossContainer");
var Main  = require("../components/Main");

var InvestmentContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <ProfitAndLossContainer/>
          <UnrealizedSummaryContainer/>
          <UnrealizedDetailsContainer/>
        </Main>
      )
  }

});

module.exports = InvestmentContainer;
