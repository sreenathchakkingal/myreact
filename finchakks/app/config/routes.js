var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var WrapperContainer = require("../containers/wrapper/WrapperContainer");
var InvestmentContainer = require("../containers/wrapper/InvestmentContainer");
var DeprecatedContainer = require("../containers/wrapper/DeprecatedContainer");
var MaintenanceContainer = require("../containers/wrapper/MaintenanceContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={WrapperContainer} />
      <Route path='investment' component={InvestmentContainer} />
      <Route path='deprecated' component={DeprecatedContainer} />
      <Route path='maint' component={MaintenanceContainer} />
    </Route>
  </Router>
);

module.exports = routes;
