var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');

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
    var metaData=columnMetadata.listColumnMetadata();

    return (
      <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="10"
      columns={["stockName","returnTillDate","buyDate","buyPrice","duration","sellPrice","bankSellPrice","quantity",
      "sellableQuantity"]}
      columnMetadata={metaData}
      enableInfiniteScroll={true} bodyHeight={400}
      />
    )
  }
}

UnrealizedDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = UnrealizedDetails
