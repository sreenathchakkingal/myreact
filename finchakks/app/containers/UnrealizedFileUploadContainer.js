var React = require('react');
var finchakksapi = require('../utils/finchakksapi');

var UnrealizedFileUploadContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

   getInitialState: function () {
      return {
        fileContent: null,
        buttonText: ''
      }
    },

    handleFile: function(e) {
      var self = this;
      var reader = new FileReader();
      var file = e.target.files[0];
      reader.onload = function(upload) {
        finchakksapi.uploadUnrealized(upload.target.result).
        then(function(updatedResponse)
        {
          console.log('handleFile.updatedResponse ', updatedResponse);
        })
      }
      reader.readAsText(file);
    },

render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleFile} />
        <label>{this.state.buttonText}</label>
      </form>
    )
  }

});

module.exports = UnrealizedFileUploadContainer;
