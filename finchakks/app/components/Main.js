var React = require('react');
var ReactRouter = require('react-router');
var Nav  = require('react-bootstrap/lib/Nav');
var NavItem  = require('react-bootstrap/lib/NavItem');
var Menu = require('./Menu');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Menu/>
        <div className='main-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});


module.exports = Main;
