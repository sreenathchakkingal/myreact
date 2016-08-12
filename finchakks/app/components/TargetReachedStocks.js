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
      columnMetadata.targetReturnPercent(),
      columnMetadata.targetSellPrice(),
      columnMetadata.targetDate()
    ];

    return (
      <PanelWrapper header='Target Reached Stocks'>
        <GriddleWrapper results={props.stocksInfo}
        columns={["stockName","duration","quantity","buyPrice","totalInvestment", "returnTillDate","sellPrice","targetReturnPercent",
        "targetSellPrice","targetDate",  ]}
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
