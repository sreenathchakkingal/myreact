var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function TargetReachedStocks (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading TargetReachedStocks'/>;
  }
  else
  {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.duration(),
      columnMetadata.quantity(),
      columnMetadata.buyPrice(),
      columnMetadata.investment(),
      columnMetadata.returnPercent(),
      columnMetadata.sellPrice(),
      columnMetadata.lowerReturnPercentTarget(),
      columnMetadata.upperReturnPercentTarget(),
      columnMetadata.lowerSellPriceTarget(),
      columnMetadata.upperSellPriceTarget(),
      columnMetadata.achieveAfterDate(),
      columnMetadata.achieveAfterDate()
    ];

    return (
      <PanelWrapper header='Target Reached Stocks'>
        <GriddleWrapper results={props.stocksInfo}
        columns={["stockName","duration","quantity","buyPrice","totalInvestment", "returnTillDate","sellPrice",
        "lowerReturnPercentTarget","upperReturnPercentTarget","lowerSellPriceTarget","upperSellPriceTarget",
        "achieveAfterDate","achieveByDate"]}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  }
}

TargetReachedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = TargetReachedStocks
