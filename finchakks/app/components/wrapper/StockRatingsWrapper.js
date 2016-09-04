var React = require('react');
var PropTypes = React.PropTypes;
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var SelectorWrapper = require('./SelectorWrapper');

var StockRatingsWrapper = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.ratingName} </td>
        <td>{this.props.ratingValue}</td>
        <td>
          <SelectorWrapper  onChange={this.props.onChange}
                            defaultValue = {this.props.ratingValue}
                            options={this.props.options}
                            name={this.props.name}  />
        </td>
      </tr>
    )
  }
});

StockRatingsWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  ratingName: PropTypes.string.isRequired,
  ratingValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

module.exports = StockRatingsWrapper;
