var React = require('react');


var Trim = React.createClass({
  render: function(){
    var name=this.props.data;
    var result=name.substring(0,8);
    return <div>{result}</div>;
  }
})

module.exports = Trim;
