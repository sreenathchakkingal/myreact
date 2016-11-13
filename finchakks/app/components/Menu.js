var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;
var Nav  = require('react-bootstrap/lib/Nav');
var NavItem  = require('react-bootstrap/lib/NavItem');

var Menu = React.createClass({
  render: function () {
    return (
      <div>
        <Nav bsStyle="tabs">
          <NavItem href="/#">Home</NavItem>
          <NavItem href="#calculator">Calculator</NavItem>
          <NavItem href="#investment">Investment</NavItem>
          <NavItem href="#maint">Maintain</NavItem>
        </Nav>
      </div>
    )
  }
});


module.exports = Menu;
