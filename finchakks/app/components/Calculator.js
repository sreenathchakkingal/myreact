var React = require('react');
var PropTypes = React.PropTypes;
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Table = require('react-bootstrap/lib/Table');

class Calculator extends  React.Component{

  render () {
      return(
        <div>
            <h1> Interest Rate Calculator (Compounded Quarterly) </h1>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Attribute Name</th>
                  <th>Attribute Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Initial Amount </td>
                  <td><FormControl type="text" onChange={this.props.onInitialAmountChange}
                  value={this.props.initialAmount}/> </td>
                </tr>
                <tr>
                  <td> Interest Rate </td>
                  <td><FormControl type="text" onChange={this.props.onInterestRateChange}
                  value={this.props.interestRate} /> </td>
                </tr>
                <tr>
                  <td> Duration(in days)</td>
                  <td><FormControl type="text" onChange={this.props.onDurationInDaysChange}
                  value={this.props.durationInDays}/> </td>
                </tr>
                <tr>
                  <td> Final Amount </td>
                  <td><FormControl type="text" onChange={this.props.onFinalAmountChange}
                  value={this.props.finalAmount}/> </td>
                </tr>
              </tbody>
            </Table>

            <Button bsStyle={this.props.buttonSytle} disabled={this.props.buttonDisabled} bsSize="small" type="submit" onClick={this.props.onSubmit}>
            {this.props.buttonText}
            </Button>
        </div>
      )
  }
}

Calculator.propTypes = {
  onInitialAmountChange: PropTypes.func.isRequired,
  onInterestRateChange: PropTypes.func.isRequired,
  onDurationInDaysChange: PropTypes.func.isRequired,
  onFinalAmountChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonSytle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
}

module.exports = Calculator
