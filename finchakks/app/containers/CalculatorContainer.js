var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var Calculator  = require('../components/Calculator');
var finchakkCalculatorApi = require('../utils/finchakkCalculatorApi');
var sharedFunctions = require('../utils/sharedFunctions');

var CalculatorContainer = React.createClass({
  getInitialState: function () {
     return {
       initialAmount : 0.0,
       interestRate : 0.0,
       durationInDays : 0,
       finalAmount : 0.0,
       buttonSytle :'primary',
       buttonText : 'Calculate',
       buttonDisabled : false,
       showCalculatorModal: true,
     }
   },

   closeCalculatorModal() {
     this.setState({ showCalculatorModal: false });
   },

   handleInitialAmountChange(e) {
     this.setState({ initialAmount: e.target.value });
   },

   handleInterestRateChange(e) {
     this.setState({ interestRate: e.target.value });
   },

   handleDurationInDaysChange(e) {
     this.setState({ durationInDays: e.target.value });
   },

   handleFinalAmountChange(e) {
     this.setState({ finalAmount: e.target.value });
   },

  handleSubmit(e) {
   this.setState({
     buttonSytle :'info',
     buttonText : 'Calculating...',
     buttonDisabled : true
    });

   finchakkCalculatorApi.calculateMissingCompoundInterestComponent(
      this.state.initialAmount, this.state.interestRate,
      this.state.durationInDays, this.state.finalAmount).
   then(function(response)
   {
     var bStyle = 'primary' ;
     var bText = 'Calculate';
     var initialAmountTemp=sharedFunctions.nullSafeDouble(response.initialAmount);
     var interestRateTemp=sharedFunctions.nullSafeDouble(response.interestRate);
     var durationInDaysTemp=sharedFunctions.nullSafeDouble(response.durationInDays);
     var finalAmountTemp=sharedFunctions.nullSafeDouble(response.finalAmount);

     this.setState({
       initialAmount : initialAmountTemp,
       interestRate : interestRateTemp,
       durationInDays : durationInDaysTemp,
       finalAmount : finalAmountTemp,
       buttonSytle : bStyle,
       buttonText : bText,
       buttonDisabled : false
     })
   }.bind(this))
  },

  render: function () {
      return (
        <div>
          <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.showCalculatorModal}
          onHide={this.closeCalculatorModal}>
            <Modal.Body>
              <Calculator
              initialAmount= {this.state.initialAmount}
              interestRate = {this.state.interestRate}
              durationInDays = {this.state.durationInDays}
              finalAmount= {this.state.finalAmount}
              onInitialAmountChange={this.handleInitialAmountChange}
              onInterestRateChange={this.handleInterestRateChange}
              onDurationInDaysChange={this.handleDurationInDaysChange}
              onFinalAmountChange={this.handleFinalAmountChange}
              onSubmit={this.handleSubmit}
              buttonSytle={this.state.buttonSytle}
              buttonDisabled={this.state.buttonDisabled}
              buttonText={this.state.buttonText}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeCalculatorModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }

  });

module.exports = CalculatorContainer;
