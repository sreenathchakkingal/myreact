var React = require('react');
var numeral = require('numeral');
var formatter = require('../../utils/formatter');

var MoneyFormat = React.createClass({
  render: function(){
    var num=this.props.data;
    return <div>{formatter.moneyFormat(num)}</div>;
  }
})

module.exports = MoneyFormat;
