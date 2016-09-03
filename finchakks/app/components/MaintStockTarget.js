var React = require('react');
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Grid = require('react-bootstrap/lib/Grid');
var Label = require('react-bootstrap/lib/Label');
var ModifiableAttributes = require('./ModifiableAttributes');


function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function MaintStockTarget (props) {
  var isRetrieving=props.isStocksInfoRetrieving;
  var isRetrieved = props.isStocksInfoRetrieved;
  return(
    <Form inline>
      <FormGroup controlId="formControlsText">
        <ControlLabel >Stock Name</ControlLabel>
        {' '}
        <FormControl type="text"  onChange={props.onCaptureChange} />
      </FormGroup>
      {' '}

      <Button bsStyle="primary" bsSize="small" disabled={isRetrieving} type="submit" onClick={!isRetrieving ? props.onStockNameSubmit : null}>
        {isRetrieving ? 'Retrieving...' : 'Retrieve All Details'}
      </Button>

      <ModifiableAttributes isRetrieved={isRetrieved} stocksInfo={props.stocksInfo} />


    </Form>





  );

}

module.exports = MaintStockTarget
