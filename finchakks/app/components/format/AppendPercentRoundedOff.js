var React = require('react');
var numeral = require('numeral');
var formatter = require('../../utils/formatter');

var AppendPercentRoundedOff = React.createClass({
  render: function(){
    var num=this.props.data;
    return <div>{formatter.appendPercentRoundedOff(num)}</div>;
  }
})

module.exports = AppendPercentRoundedOff;
