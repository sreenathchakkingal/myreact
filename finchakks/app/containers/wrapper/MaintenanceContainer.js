var React = require('react');
var MaintStockTargetContainer = require("../MaintStockTargetContainer");
var Main  = require("../../components/Main");

var MaintenanceContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <MaintStockTargetContainer/>
        </Main>
      )
  }

});

module.exports = MaintenanceContainer;
