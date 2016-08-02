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

function ListBlackListedStocks (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading ListBlackListedStocks'/>;
  }
  else
  {
    var metaData=columnMetadata.listColumnMetadata();
    
    return (
      <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="20"
      columns={["stockName","impactOnAverageReturn","returnTillDate","totalInvestment","totalReturn","totalReturnIfBank","quantity"]}
      columnMetadata={metaData}/>
    )
  }
}

ListBlackListedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = ListBlackListedStocks
