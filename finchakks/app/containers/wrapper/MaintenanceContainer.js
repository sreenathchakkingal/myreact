var React = require('react');
var MaintStockAttributesContainer = require("../MaintStockAttributesContainer");
var Main  = require("../../components/Main");

var MaintenanceContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <MaintStockAttributesContainer/>
        </Main>
      )
  }

});

module.exports = MaintStockAttributesContainer;
