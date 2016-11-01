var React = require('react');
var ReactRouter = require('react-router');
var Nav  = require('react-bootstrap/lib/Nav');
var NavItem  = require('react-bootstrap/lib/NavItem');

var Menu = React.createClass({
  render: function () {
    return (
      <div>
        <Nav bsStyle="tabs">
          <NavItem eventKey="1" href="/">Home</NavItem>
          <NavItem eventKey="2" href="/#/calculator">Calculator</NavItem>
          <NavItem eventKey="3" href="/#/investment">Investment</NavItem>
          <NavItem eventKey="4" href="/#/maint">Maint</NavItem>
        </Nav>
      </div>
    )
  }
});


module.exports = Menu;
