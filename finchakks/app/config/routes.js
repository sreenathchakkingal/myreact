var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var WrapperContainer = require("../containers/wrapper/WrapperContainer");
var InvestmentContainer = require("../containers/wrapper/InvestmentContainer");
var MaintenanceContainer = require("../containers/wrapper/MaintenanceContainer");
var CalculatorContainer = require('../containers/CalculatorContainer');
var UnrealizedDetailsSelectedContainer = require("../containers/UnrealizedDetailsSelectedContainer");

class Routes extends React.Component {
  render() {
    return (
      <Router hashHistory={hashHistory}>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/investment">Investment</Link></li>
          <li><Link to="/maint">Maintain</Link></li>
        </ul>

        <hr/>
            <Route exact path='/' component={WrapperContainer}/>
            <Route path='/calculator' component={CalculatorContainer} />
            <Route path='/investment' component={InvestmentContainer} />
            <Route path='/maint' component={MaintenanceContainer} />
            <Route path='/selectedUnrealized/:stockName' component={UnrealizedDetailsSelectedContainer} />

          </div>
      </Router>
    )
  }
}

module.exports = Routes;
