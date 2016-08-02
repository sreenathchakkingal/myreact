var React = require('react');
var numeral = require('numeral');

var AppendPercentRoundedOff = React.createClass({
  render: function(){
    var num=this.props.data;
    var result=numeral(num/100).format('0%');
    return <div>{result}</div>;
  }
})

module.exports = AppendPercentRoundedOff;
