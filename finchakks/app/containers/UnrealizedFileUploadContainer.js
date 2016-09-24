var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var finchakksapi = require('../utils/finchakksapi');
var UnrealizedFileUpload  = require('../components/UnrealizedFileUpload');

var UnrealizedFileUploadContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

   getInitialState: function () {
      return {
        fileContent: null,
        buttonSytle :'primary',
        buttonText : 'Upload Changes',
        buttonDisabled : false
      }
    },

    handleFile: function(e) {
      var self = this;
      var reader = new FileReader();
      var file = e.target.files[0];
      reader.onload = function(upload) {
        this.setState({
          fileContent: upload.target.result
         });
      }.bind(this);
      reader.readAsText(file);
    },

    handleSubmit(e) {
      console.log('in handleSubmit');
      this.setState({
        buttonSytle :'info',
        buttonText : 'Uploading Changes',
        buttonDisabled : true
       });

      finchakksapi.uploadUnrealized(this.state.fileContent).
      then(function(updatedResponse)
      {
        console.log('handleSubmit.updatedResponse ', updatedResponse);
        var bStyle = updatedResponse.success ? 'success' : 'danger';
        var bText = updatedResponse.success ? 'Uploaded!!!': updatedResponse.statusMessage;

        this.setState({
          buttonSytle : bStyle,
          buttonText : bText,
          buttonDisabled : true
        })
      }.bind(this))
    },

  render: function () {
      return (
        <UnrealizedFileUpload
          buttonSytle={this.state.buttonSytle}
          buttonDisabled={this.state.buttonDisabled}
          buttonText={this.state.buttonText}
          onChange={this.handleFile}
          onSubmit={this.handleSubmit}
          />
      )
    }

});

module.exports = UnrealizedFileUploadContainer;
