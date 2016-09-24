var React = require('react');
var RetrieveModifiableStockAttributesContainer = require("../RetrieveModifiableStockAttributesContainer");
var UnrealizedFileUploadContainer = require("../UnrealizedFileUploadContainer");
var Main  = require("../../components/Main");

var MaintenanceContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <RetrieveModifiableStockAttributesContainer/>
          <UnrealizedFileUploadContainer/>
        </Main>
      )
  }
});

module.exports = MaintenanceContainer;
