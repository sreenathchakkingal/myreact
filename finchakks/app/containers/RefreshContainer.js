var React = require('react');
var Refresh = require('../components/Refresh');
var finchakksapi = require('../utils/finchakksapi');

var RefreshContainer = React.createClass({
  getInitialState: function () {
     return {
       buttonSytle :'primary',
       buttonText : 'Refresh',
       buttonDisabled : false
     }
   },

  handleSubmit(e) {
    this.setState({
      buttonSytle :'info',
      buttonText : 'Refreshing',
      buttonDisabled : true
     });

    finchakksapi.refresh().
    then(function(updatedResponse)
    {
      var bStyle = updatedResponse.success ? 'success' : 'danger';
      var bText =  updatedResponse.statusMessage;
      this.setState({
        buttonSytle : bStyle,
        buttonText : bText,
        buttonDisabled : true
      })
    }.bind(this))
  },

  render: function () {
      return (
        <Refresh
        onSubmit={this.handleSubmit}
        buttonSytle={this.state.buttonSytle}
        buttonDisabled={this.state.buttonDisabled}
        buttonText={this.state.buttonText}
        />
      )
    }

});

module.exports = RefreshContainer;
