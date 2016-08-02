var React = require('react');
var numeral = require('numeral');
var formatter = require('../../utils/formatter');

var ConvertToPercent = React.createClass({
  render: function(){
    return <div>{formatter.convertToPercent(this.props.data)}</div>;
  }
})

module.exports = ConvertToPercent;
