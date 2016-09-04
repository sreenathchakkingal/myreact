var React = require('react');
var PropTypes = React.PropTypes;
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');

var SelectorWrapper = React.createClass({
  render: function () {
    var options = this.props.options.map(function(value, i){
      return (
        <option key={value} value={value}>{value}</option>
      );
    });

    return (
      <FormGroup controlId="formControlsSelectMultiple">
        <FormControl componentClass="select" name={this.props.name} onChange={this.props.onChange} defaultValue ={this.props.defaultValue}>
          {options}
        </FormControl>
      </FormGroup>
    )
  }
});

SelectorWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  name: PropTypes.string
}

module.exports = SelectorWrapper;
