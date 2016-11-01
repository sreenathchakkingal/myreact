var React = require('react');
var CalculatorContainer = require("../CalculatorContainer");
var Main  = require("../../components/Main");
var Menu  = require("../../components/Menu");

var CalculatorWrapperContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <Menu/>
          <CalculatorContainer/>
        </Main>
      )
  }

});

module.exports = CalculatorWrapperContainer;
