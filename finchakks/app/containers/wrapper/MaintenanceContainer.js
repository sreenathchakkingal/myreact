var React = require('react');
var RetrieveModifiableStockAttributesContainer = require("../RetrieveModifiableStockAttributesContainer");
var Main  = require("../../components/Main");

var MaintenanceContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <RetrieveModifiableStockAttributesContainer/>
        </Main>
      )
  }

});

module.exports = MaintenanceContainer;
