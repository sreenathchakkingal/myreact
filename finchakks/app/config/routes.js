var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Menu = require('../components/Menu');

var WrapperContainer = require("../containers/wrapper/WrapperContainer");
var InvestmentContainer = require("../containers/wrapper/InvestmentContainer");
var MaintenanceContainer = require("../containers/wrapper/MaintenanceContainer");
var CalculatorWrapperContainer = require('../containers/wrapper/CalculatorWrapperContainer');

var DeprecatedContainer = require("../containers/wrapper/DeprecatedContainer");
var UnrealizedDetailsSelectedContainer = require("../containers/UnrealizedDetailsSelectedContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={WrapperContainer} />

      <Route path='investment' component={InvestmentContainer} />
      <Route path='maint' component={MaintenanceContainer} />
      <Route path='calculator' component={CalculatorWrapperContainer} />

      <Route path='selectedUnrealized/:stockName' component={UnrealizedDetailsSelectedContainer} />
      <Route path='deprecated' component={DeprecatedContainer} />
    </Route>
  </Router>
);

module.exports = routes;
