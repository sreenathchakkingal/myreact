var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var Griddle = require('griddle-react');
var AppendPercent = require('./format/AppendPercent');
var MoneyFormat = require('./format/MoneyFormat');
var ConvertToPercent = require('./format/ConvertToPercent');
var AppendPercentRoundedOff = require('./format/AppendPercentRoundedOff');
var ConvertToPercentRoundedOff = require('./format/ConvertToPercentRoundedOff');


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
      }
    ];

    return (
      <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="10"
      columns={["stockName","returnTillDate","duration","buyPrice","sellPrice","bankSellPrice","quantity"]}
      columnMetadata={metaData}
      enableInfiniteScroll={true} bodyHeight={400}
      />
    )
  }
}

UnrealizedDetailsSelected.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = UnrealizedDetailsSelected