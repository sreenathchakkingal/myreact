var React = require('react');
var ListBlackListedStocksContainer = require("./ListBlackListedStocksContainer");
var Main  = require("../components/Main");

var DeprecatedContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        <Main>
          <ListBlackListedStocksContainer/>
        </Main>
      )
  }

});

module.exports = DeprecatedContainer;
