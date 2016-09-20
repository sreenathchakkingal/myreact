var React = require('react');
var finchakksapi = require('../utils/finchakksapi');

var UnrealizedFileUploadContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

   getInitialState: function () {
      return {
        fileContent: null
      }
    },

    handleFile: function(e) {
      var self = this;
      var reader = new FileReader();
      var file = e.target.files[0];
      reader.onload = function(upload) {
        finchakksapi.uploadUnrealized(upload.target.result);
      }
      reader.readAsText(file);
    },

render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleFile} />
      </form>
    )
  }

});

module.exports = UnrealizedFileUploadContainer;
