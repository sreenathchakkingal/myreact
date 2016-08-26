var React = require('react');
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Table = require('react-bootstrap/lib/Table');

function ModifiableAttributes (props) {
  if(props.isRetrieved ===true )
  {
    var info= props.stocksInfo.items[0];
    return(
      <Table>
        <thead>
          <tr>
            <th>Attribute Name</th>
            <th>Current Value</th>
            <th>New Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock Name</td>
            <td>{info.stockName}</td>
            <td><input type='text'/></td>
          </tr>
          <tr>
            <td>Is Watch Listed </td>
            <td>{info.isWatchListed}</td>
            <td><input type='text'/></td>
          </tr>
        </tbody>
      </Table>
    )
  }
  else {
    {
      return <div/>;
    }
  }

}

module.exports = ModifiableAttributes
