var React = require('react');
var PropTypes = React.PropTypes;
var FormGroup = require('react-bootstrap/lib/FormGroup');
var Button = require('react-bootstrap/lib/Button');

var Refresh = React.createClass({

  render: function () {
      return(
        <div>
          <form>
               <Button bsStyle={this.props.buttonSytle} disabled={this.props.buttonDisabled} bsSize="small" type="submit"
               onClick={this.props.onSubmit}>
              {this.props.buttonText}
              </Button>
          </form>
        </div>
      )
  }
})

Refresh.propTypes = {
  buttonSytle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

module.exports = Refresh
