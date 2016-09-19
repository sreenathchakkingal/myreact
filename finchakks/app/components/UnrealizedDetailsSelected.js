var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var AppendPercent = require('./format/AppendPercent');
var MoneyFormat = require('./format/MoneyFormat');
var ConvertToPercent = require('./format/ConvertToPercent');
var AppendPercentRoundedOff = require('./format/AppendPercentRoundedOff');
var ConvertToPercentRoundedOff = require('./format/ConvertToPercentRoundedOff');
var PanelWrapper = require('./wrapper/PanelWrapper');
var GriddleWrapper = require('./wrapper/GriddleWrapper');

function UnrealizedDetailsSelected (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading UnrealizedDetailsSelected'/>;
  }
  else
  {
    var metaData=[
      {
      "columnName": "stockName",
      "displayName": "Stock Name"
      },
      {
      "columnName": "returnTillDate",
      "displayName": "Return %",
      "customComponent": AppendPercent
      },
      {
      "columnName": "buyDate",
      "displayName": "Buy Date"
      },
      {
      "columnName": "buyPrice",
      "displayName": "Buy Price",
      "customComponent": MoneyFormat
    },
      {
      "columnName": "duration",
      "displayName": "Duration"
      },
      {
      "columnName": "sellPrice",
      "displayName": "Sell Price",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "bankSellPrice",
      "displayName": "Bank",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "quantity",
      "displayName": "Qty",
      "customComponent": MoneyFormat
    },
    {
      "columnName": "totalInvestment",
      "displayName": "Inv",
      "customComponent": MoneyFormat
    },
    {
      "columnName": "totalReturn",
      "displayName": "Return",
      "customComponent": MoneyFormat
    },
    {
      "columnName": "totalReturnIfBank",
      "displayName": "Bank",
      "customComponent": MoneyFormat
    },
    {
      "columnName": "diff",
      "displayName": "Diff",
      "customComponent": MoneyFormat
    }
    ];

    return (
      <PanelWrapper header='Unrealized Details'>
        <GriddleWrapper results={props.stocksInfo}
        columns={["returnTillDate","duration","buyPrice","sellPrice","bankSellPrice","quantity", "totalInvestment",
      "totalReturn", "totalReturnIfBank", "diff", "stockName"]}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  }
}

UnrealizedDetailsSelected.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = UnrealizedDetailsSelected
