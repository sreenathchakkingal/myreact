var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var StockExceptionsContainer = require("../StockExceptionsContainer");
var NDaysHistoryStocksContainer = require("../NDaysHistoryStocksContainer");
var ProfitAndLossContainer = require("../ProfitAndLossContainer");
var TargetReachedStocksContainer = require('../TargetReachedStocksContainer');
var Main  = require("../../components/Main");
var Menu  = require("../../components/Menu");

var WrapperContainer = React.createClass({
    render: function () {
      return (
        <Main>
          <Menu/>
          <StockExceptionsContainer/>
          <ProfitAndLossContainer/>
          <TargetReachedStocksContainer/>
          <NDaysHistoryStocksContainer/>
        </Main>
      )
  }

});

module.exports = WrapperContainer;
