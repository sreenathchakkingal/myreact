var React = require('react');
var ListBlackListedStocksContainer = require("./ListBlackListedStocksContainer");
var Main  = require("../components/Main");

var DeprecatedContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <ListBlackListedStocksContainer/>
        </Main>
      )
  }

});

module.exports = DeprecatedContainer;
