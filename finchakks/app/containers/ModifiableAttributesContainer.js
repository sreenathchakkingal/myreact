var React = require('react');
var ModifiableAttributes  = require('../components/ModifiableAttributes');
var finchakksapi = require('../utils/finchakksapi');

var ModifiableAttributesContainer = React.createClass({
  getInitialState: function () {
     return {
       buttonSytle :'',
       buttonText : '',
       buttonDisabled : false,
       moneycontrolStockName : '',
       isWatchListed : '',
       lowerReturnPercentTarget : 0.0,
       upperReturnPercentTarget : 0.0,
       stockRatings:[]
     }
   },

  handleMoneyControlStockNameChange(e) {
    this.setState({ moneycontrolStockName: e.target.value });
  },

  handleIsWatchlistedChange(e) {
    this.setState({ isWatchListed: e.target.value });
  },

  handleLowerReturnPercentTargetChange(e) {
    this.setState({ lowerReturnPercentTarget: e.target.value });
  },

  handleUpperReturnPercentTargetChange(e) {
    this.setState({ upperReturnPercentTarget: e.target.value });
  },

  handleRatingsChange(index, e) {
    var stockRatings = this.state.stockRatings.slice();
    stockRatings[index] = e.target.name;
    stockRatings[index+1] = e.target.value;
    this.setState({
      stockRatings: stockRatings
    });
  },

  handleSubmit(e) {
    this.setState({
      buttonSytle :'info',
      buttonText : 'Updating Changes',
      buttonDisabled : true
     });

    finchakksapi.updateStockAttributes(this.props.stocksInfo.items[0].stockName,
       this.state.moneycontrolStockName, this.state.isWatchListed,
       this.state.lowerReturnPercentTarget, this.state.upperReturnPercentTarget,
       this.state.stockRatings).
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
      return (
          <ModifiableAttributes
          isRetrieved={this.props.isRetrieved}
          stocksInfo={this.props.stocksInfo}
          onRatingsChange={this.handleRatingsChange}
          onMoneyControlStockNameChange={this.handleMoneyControlStockNameChange}
          onIsWatchlistedChange={this.handleIsWatchlistedChange}
          onLowerReturnPercentTargetChange={this.handleLowerReturnPercentTargetChange}
          onUpperReturnPercentTargetChange={this.handleUpperReturnPercentTargetChange}
          onSubmit={this.handleSubmit}
          buttonSytle={this.state.buttonSytle}
          buttonDisabled={this.state.buttonDisabled}
          buttonText={this.state.buttonText}
          />
      )
    }

  });

module.exports = ModifiableAttributesContainer;
