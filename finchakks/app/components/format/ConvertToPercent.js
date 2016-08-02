var React = require('react');
var numeral = require('numeral');

var ConvertToPercent = React.createClass({
  render: function(){
    var num=this.props.data;
    var result=numeral(num).format('0.00%');
    return <div>{result}</div>;
  }
})

module.exports = ConvertToPercent;
