var React = require('react');

var MinOrMaxFormat = React.createClass({
  render: function(){
    var num=this.props.data;
    var result='Max';
    if(num)
    {
      result='Min' ;
    }
    return <div>{result}</div>;
  }
});

module.exports = MinOrMaxFormat;
