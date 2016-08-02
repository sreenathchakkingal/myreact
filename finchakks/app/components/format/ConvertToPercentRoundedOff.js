var React = require('react');
var numeral = require('numeral');
var formatter = require('../../utils/formatter');

var ConvertToPercentRoundedOff = React.createClass({
  render: function(){
    var num=this.props.data;
    return <div>{formatter.convertToPercentRoundedOff(num)}</div>;
  }
})

module.exports = ConvertToPercentRoundedOff;
