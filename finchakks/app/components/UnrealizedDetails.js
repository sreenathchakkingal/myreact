var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var PanelWrapper = require('./wrapper/PanelWrapper');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function UnrealizedDetails (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading UnrealizedDetails'/>;
  }
  else
  {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.returnPercent(),
      columnMetadata.buyDate(),
      columnMetadata.buyPrice(),
      columnMetadata.duration(),
      columnMetadata.sellPrice(),
      columnMetadata.bankSellPrice(),
      columnMetadata.quantity(),
      columnMetadata.investment(),
      columnMetadata.absReturn(),
      columnMetadata.bankReturn(),
      columnMetadata.diff()
    ];

    return (
      <PanelWrapper header='Unrealized Details'>
        <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="10"
        columns={["stockName","returnTillDate","buyDate","buyPrice","duration","sellPrice","bankSellPrice","quantity", "totalInvestment",
      "totalReturn", "totalReturnIfBank", "diff"]}
        columnMetadata={metaData}
        enableInfiniteScroll={true} bodyHeight={400} useFixedHeader={true}
        />
      </PanelWrapper>
    )
  }
}

UnrealizedDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = UnrealizedDetails
