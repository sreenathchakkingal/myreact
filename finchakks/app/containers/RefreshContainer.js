var React = require('react');
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var Refresh = require('../components/Refresh');
var finchakksapi = require('../utils/finchakksapi');

var RefreshContainer = React.createClass({
  getInitialState: function () {
     return {
       buttonSytle :'primary',
       buttonText : 'Refresh',
       buttonDisabled : false
      //  refreshBrowserCacheButtonSytle: 'primary',
      //  refreshBrowserCacheButtonText  : 'Refresh Browser Cache'
     }
   },

  handleSubmit(e) {
    this.setState({
      buttonSytle :'info',
      buttonText : 'Refreshing',
      buttonDisabled : true,

     });

    // localStorage.clear(); //clear cache
    // console.log('local cache cleared');

    finchakksapi.refresh().
    then(function(updatedResponse)
    {
      var bStyle = updatedResponse.success ? 'success' : 'danger';
      var bText =  updatedResponse.statusMessage;
      this.setState({
        buttonSytle : bStyle,
        buttonText : bText,
        buttonDisabled : false
      })
    }.bind(this))
  },

  // handleRefreshBrowserCacheSubmit(e) {
  //   this.setState({
  //     refreshBrowserCacheButtonSytle :'info',
  //     refreshBrowserCacheButtonText : 'Refreshing'
  //    });
  //
  //   localStorage.clear(); //clear cache
  //   console.log('local cache cleared');
  //
  //   this.setState({
  //     refreshBrowserCacheButtonSytle :'success',
  //     refreshBrowserCacheButtonText : 'Refreshed'
  //    });
  // },

  render: function () {
      return (
        <Form inline>
          <FormGroup>
           <Refresh
            onSubmit={this.handleSubmit}
            buttonSytle={this.state.buttonSytle}
            buttonDisabled={this.state.buttonDisabled}
            buttonText={this.state.buttonText}
            />
          </FormGroup>
        </Form>
      )
    }

});

module.exports = RefreshContainer;
