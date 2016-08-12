var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var PanelWrapper = require('./PanelWrapper');

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
        <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="10"
        columns={["stockName","duration","quantity","buyPrice","totalInvestment", "returnTillDate","sellPrice","targetReturnPercent",
        "targetSellPrice","targetDate",  ]}
        columnMetadata={metaData}
        enableInfiniteScroll={true} bodyHeight={400} useFixedHeader={true}
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
