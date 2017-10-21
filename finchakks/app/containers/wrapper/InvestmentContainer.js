var React = require('react');
var UnrealizedDetailsContainer = require("../UnrealizedDetailsContainer");
var UnrealizedSummaryContainer = require("../UnrealizedSummaryContainer");
var ProfitAndLossContainer = require("../ProfitAndLossContainer");


var InvestmentContainer = React.createClass({
    render: function () {
      return (
        <div>
          <ProfitAndLossContainer/>
          <UnrealizedSummaryContainer/>
          <UnrealizedDetailsContainer/>
        </div>
      )
  }
});

module.exports = InvestmentContainer;
