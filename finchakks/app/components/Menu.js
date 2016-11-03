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
          <NavItem> <IndexLink to="/">Home</IndexLink></NavItem>
          <NavItem> <Link to="/calculator">Calculator</Link></NavItem>
          <NavItem> <Link to="/investment">Investment</Link></NavItem>
          <NavItem> <Link to="/maint">Maint</Link></NavItem>
        </Nav>
      </div>
    )
  }
});


module.exports = Menu;
