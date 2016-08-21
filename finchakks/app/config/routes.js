var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var WrapperContainer = require("../containers/WrapperContainer");
var InvestmentContainer = require("../containers/InvestmentContainer");
var DeprecatedContainer = require("../containers/DeprecatedContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={WrapperContainer} />
      <Route path='investment' component={InvestmentContainer} />
      <Route path='deprecated' component={DeprecatedContainer} />
    </Route>
  </Router>
);

module.exports = routes;
