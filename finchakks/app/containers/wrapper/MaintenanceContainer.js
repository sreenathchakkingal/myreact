var React = require('react');
var RetrieveModifiableStockAttributesContainer = require("../RetrieveModifiableStockAttributesContainer");
var UnrealizedFileUploadContainer = require("../UnrealizedFileUploadContainer");
var Main  = require("../../components/Main");
var Panel = require('react-bootstrap/lib/Panel');
var Accordion = require('react-bootstrap/lib/Accordion');
var PanelWrapper = require('../../components/wrapper/PanelWrapper');


var MaintenanceContainer = React.createClass({
    render: function () {
      return (
        <Main>
            <PanelWrapper header='Retrieve Modifiable Stock Attributes' eventKey='1'>
              <RetrieveModifiableStockAttributesContainer/>
            </PanelWrapper>
            <PanelWrapper header='Unrealized File Upload' eventKey='2'>
              <UnrealizedFileUploadContainer/>
            </PanelWrapper>
        </Main>
      )
  }
});

module.exports = MaintenanceContainer;
