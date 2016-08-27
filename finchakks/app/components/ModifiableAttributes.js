var React = require('react');
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Table = require('react-bootstrap/lib/Table');
var finchakksapi = require('../utils/finchakksapi');

var ModifiableAttributes = React.createClass({
  getInitialState: function () {
     return {
       buttonSytle :'',
       buttonText : '',
       buttonDisabled : false
     }
   },

  handleStockNameChange(e) {
    this.setState({ stockName: e.target.value });
  },

  handleIsWatchlistedChange(e) {
    this.setState({ isWatchListed: e.target.value });
  },

  handleSubmit(e) {
    this.setState({
      buttonSytle :'info',
      buttonText : 'Updating Changes',
      buttonDisabled : true
     });

    finchakksapi.updateStockAttributes(this.state.stockName, this.state.isWatchListed).
    then(function(updatedResponse)
    {
      var bStyle = updatedResponse.success ? 'success' : 'error';
      var bText = updatedResponse.success ? 'Updated Attributes' : updatedResponse.statusMessage;
      this.setState({
        buttonSytle : bStyle,
        buttonText : bText,
        buttonDisabled : true
      })
    }.bind(this))

  },

  componentWillReceiveProps: function () {
    this.setState({
      buttonSytle :'primary',
      buttonText : 'Update Changes',
      buttonDisabled : false
    })
   },

  render: function () {
    var refreshRequestTemp=this.props.refreshRequest;
    console.log('in render ', refreshRequestTemp);
    if(this.props.isRetrieved ===true )
    {
      var info = this.props.stocksInfo.items[0];
      return(
        <div>
          <Table striped bordered condensed hover>
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
                <td><FormControl type="text" onChange={this.handleStockNameChange}/> </td>
              </tr>
              <tr>
                <td>Is Watch Listed </td>
                <td>{info.isWatchListed}</td>
                <td><FormControl type="text" onChange={this.handleIsWatchlistedChange}/></td>
              </tr>
            </tbody>
          </Table>

          <Button bsStyle={this.state.buttonSytle} disabled={this.state.buttonDisabled} bsSize="small" type="submit" onClick={this.handleSubmit}>
          {this.state.buttonText}
          </Button>


        </div>
      )
    }
    else
    {
      return <div/>;
    }
  }
})


function ModifiableAttributes (props) {


}

module.exports = ModifiableAttributes
