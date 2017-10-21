var React = require('react');
var ReactRouter = require('react-router');

var StockExceptionsContainer = require("../StockExceptionsContainer");
var NDaysHistoryStocksContainer = require("../NDaysHistoryStocksContainer");
var ProfitAndLossContainer = require("../ProfitAndLossContainer");
var TargetReachedStocksContainer = require('../TargetReachedStocksContainer');
var TopMovingStocksContainer = require('../TopMovingStocksContainer');


var WrapperContainer = React.createClass({
    render: function () {
      return (
        <div>
          <StockExceptionsContainer/>
          <ProfitAndLossContainer/>
          <TopMovingStocksContainer/>
          <TargetReachedStocksContainer/>
          <NDaysHistoryStocksContainer/>
        </div>
      )
  }

});

module.exports = WrapperContainer;
