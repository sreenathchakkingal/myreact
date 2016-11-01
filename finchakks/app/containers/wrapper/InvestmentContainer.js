var React = require('react');
var UnrealizedDetailsContainer = require("../UnrealizedDetailsContainer");
var UnrealizedSummaryContainer = require("../UnrealizedSummaryContainer");
var ProfitAndLossContainer = require("../ProfitAndLossContainer");
var Main  = require("../../components/Main");
var Menu  = require("../../components/Menu");

var InvestmentContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <Menu/>
          <ProfitAndLossContainer/>
          <UnrealizedSummaryContainer/>
          <UnrealizedDetailsContainer/>
        </Main>
      )
  }

});

module.exports = InvestmentContainer;
