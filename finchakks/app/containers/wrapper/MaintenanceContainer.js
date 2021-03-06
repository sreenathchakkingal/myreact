var React = require('react');
var RetrieveModifiableStockAttributesContainer = require("../RetrieveModifiableStockAttributesContainer");
var UnrealizedFileUploadContainer = require("../UnrealizedFileUploadContainer");
var RefreshContainer = require("../RefreshContainer");
var Panel = require('react-bootstrap/lib/Panel');
var Accordion = require('react-bootstrap/lib/Accordion');
var PanelWrapper = require('../../components/wrapper/PanelWrapper');

var MaintenanceContainer = React.createClass({
    render: function () {
      return (
        <div>
            <PanelWrapper header='Retrieve Modifiable Stock Attributes'>
              <RetrieveModifiableStockAttributesContainer/>
            </PanelWrapper>
            <PanelWrapper header='Unrealized File Upload'>
              <UnrealizedFileUploadContainer/>
            </PanelWrapper>
            <PanelWrapper header='Refresh'>
              <RefreshContainer/>
            </PanelWrapper>
        </div>
      )
  }
});

module.exports = MaintenanceContainer;
