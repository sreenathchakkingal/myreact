var React = require('react');
var UnrealizedDetailsContainer = require("./UnrealizedDetailsContainer");
var ProfitAndLossContainer = require("./ProfitAndLossContainer");
var Main  = require("../components/Main");

var InvestmentContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        <Main>
          <ProfitAndLossContainer/>
          <UnrealizedDetailsContainer/>
        </Main>
      )
  }

});

module.exports = InvestmentContainer;
