var React = require('react');
var ListBlackListedStocksContainer = require("../ListBlackListedStocksContainer");
var Main  = require("../../components/Main");
var Menu  = require("../../components/Menu");

var DeprecatedContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <Menu/>
          <ListBlackListedStocksContainer/>
        </Main>
      )
  }

});

module.exports = DeprecatedContainer;
