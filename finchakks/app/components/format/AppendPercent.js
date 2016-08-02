var React = require('react');
var numeral = require('numeral');
var formatter = require('../../utils/formatter');

var AppendPercent = React.createClass({
  render: function(){
    var num=this.props.data;
    return <div>{formatter.appendPercent(num)}</div>;
  }
})

module.exports = AppendPercent;
