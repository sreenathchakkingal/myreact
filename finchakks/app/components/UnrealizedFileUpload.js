var React = require('react');
var PropTypes = React.PropTypes;
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');

var UnrealizedFileUpload = React.createClass({

  render: function () {
      return(
        <div>
          <form>
            <FormGroup controlId='formControlsFile'>

              <input type="file" onChange={this.props.onChange}  />
            </FormGroup>
            {' '}
               <Button bsStyle={this.props.buttonSytle} disabled={this.props.buttonDisabled} bsSize="small" type="submit"
               onClick={this.props.onSubmit}>
              {this.props.buttonText}
              </Button>
          </form>
        </div>
      )
  }
})

UnrealizedFileUpload.propTypes = {

}

module.exports = UnrealizedFileUpload
