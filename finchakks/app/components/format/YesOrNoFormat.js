var React = require('react');

var YesOrNoFormat = React.createClass({
  render: function(){
    var num=this.props.data;
    var result='No';
    if(num)
    {
      result='Yes' ;
    }
    return <div>{result}</div>;
  }
});

module.exports = YesOrNoFormat;
