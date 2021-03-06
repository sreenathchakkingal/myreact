var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');
var sharedFunctions = require('../utils/sharedFunctions');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function TargetReachedStocks (props) {
  // if(props.isLoading ===true )
  // {
  //   return <Loading text='Loading TargetReachedStocks'/>;
  // }
  // else
  // {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.returnPercent(),
      columnMetadata.quantity(),
      columnMetadata.investment(),
      columnMetadata.absReturn(),
      columnMetadata.bankReturn(),
      columnMetadata.impact(),
      columnMetadata.diff(),
      columnMetadata.lowerReturnPercentTarget(),
      columnMetadata.upperReturnPercentTarget(),
      columnMetadata.lowerSellPriceTarget(),
      columnMetadata.upperSellPriceTarget(),
      columnMetadata.achieveAfterDate(),
      columnMetadata.achieveByDate(),
      columnMetadata.sellPrice()
    ];

    var columnNames = ["stockName","returnTillDate", "lowerReturnPercentTarget","upperReturnPercentTarget",
    "sellPrice", "quantity", "totalInvestment","totalReturn"
  ];

    return (
      <PanelWrapper header={sharedFunctions.appendLoadingStatus('Target Reached Stocks', props.isLoading)}>
        <GriddleWrapper results={props.stocksInfo}
        columns={columnNames}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  // }
}

TargetReachedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = TargetReachedStocks
