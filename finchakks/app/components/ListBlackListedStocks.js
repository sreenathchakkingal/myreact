var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var Panel = require('react-bootstrap/lib/Panel');
var AppendPercent = require('./format/AppendPercent');
var MoneyFormat = require('./format/MoneyFormat');
var ConvertToPercent = require('./format/ConvertToPercent');
var AppendPercentRoundedOff = require('./format/AppendPercentRoundedOff');
var ConvertToPercentRoundedOff = require('./format/ConvertToPercentRoundedOff');
var Trim = require('./format/Trim');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function ListBlackListedStocks (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading ListBlackListedStocks'/>;
  }
  else
  {
    var metaData=[
      {
      "columnName": "stockName",
      "displayName": "Stock Name",
      "customComponent": Trim
      },
      {
      "columnName": "returnTillDate",
      "displayName": "Return %",
      "customComponent": AppendPercent
      },
      {
      "columnName": "totalInvestment",
      "displayName": "Investment",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "quantity",
      "displayName": "Qty",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "sellableQuantity",
      "displayName": "Sellable Qty",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "totalReturn",
      "displayName": "Return",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "totalReturnIfBank",
      "displayName": "Return(Bank)",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "impactOnAverageReturn",
      "displayName": "Impact",
      "customComponent": ConvertToPercent
      },
      {
      "columnName": "stockRatingValue",
      "displayName": "Score"
      },
      {
      "columnName": "investmentRatio",
      "displayName": "Inv Ratio",
      "customComponent": ConvertToPercent
      },
      {
      "columnName": "industryInvestmentRatio",
      "displayName": "Ind Inv Ratio",
      "customComponent": ConvertToPercent
      },
      {
      "columnName": "sellPrice",
      "displayName": "Close Price",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "simpleMovingAverage",
      "displayName": "SMV",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "simpleMovingAverageAndSellDeltaNormalized",
      "displayName": "SMV(%)",
      "customComponent": AppendPercentRoundedOff
      },
      {
      "columnName": "netNDaysGain",
      "displayName": "NDays(%)",
      "customComponent": ConvertToPercentRoundedOff
      },
      {
      "columnName": "industry",
      "displayName": "Ind"
      },
      {
      "columnName": "nDay1Gain",
      "displayName": "Day1",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay2Gain",
      "displayName": "Day2",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay3Gain",
      "displayName": "Day3",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay4Gain",
      "displayName": "Day4",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay5Gain",
      "displayName": "Day5",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay6Gain",
      "displayName": "Day6",
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
      "displayName": "Return",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "bankSellPrice",
      "displayName": "Return(Bank)",
      "customComponent": MoneyFormat
      }
    ];

    return (
      <div>
        <Panel header='Black List' bsStyle="info">
          <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="20"
          columns={["stockName","impactOnAverageReturn","returnTillDate","totalInvestment","totalReturn","totalReturnIfBank","quantity"]}
          columnMetadata={metaData}/>
        </Panel>
      </div>
    )
  }
}

ListBlackListedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = ListBlackListedStocks
