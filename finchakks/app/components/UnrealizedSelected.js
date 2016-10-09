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

function UnrealizedSelected (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading UnrealizedSelected'/>;
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
    },
    {
      "columnName": "impactOnAverageReturn",
      "displayName": "Impact",
      "customComponent": ConvertToPercent
    }
    ];

    var detailsHeaderName = 'Unrealized Details: '+props.stockName;
    var summaryHeaderName = 'Unrealized Summary: '+props.stockName;
    var summaryArray=[];
    summaryArray[0] = props.stockSummary;
    return (
      <div>
        <PanelWrapper header={detailsHeaderName}>
          <GriddleWrapper results={props.stockDetail}
          columns={["returnTillDate","duration","buyPrice","sellPrice","bankSellPrice","quantity", "totalInvestment",
          "totalReturn", "totalReturnIfBank", "diff"]}
          columnMetadata={metaData}
          />
        </PanelWrapper>

        <PanelWrapper header={summaryHeaderName}>
          <GriddleWrapper results={summaryArray}
          columns={["returnTillDate","quantity","totalInvestment", "totalReturn", "totalReturnIfBank","diff",
          "impactOnAverageReturn","sellPrice"]}
          columnMetadata={metaData}
          />
        </PanelWrapper>
      </div>
    )
  } //else block

}

UnrealizedSelected.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stockName: PropTypes.string.isRequired,
  stockDetail: PropTypes.array.isRequired
}

module.exports = UnrealizedSelected
