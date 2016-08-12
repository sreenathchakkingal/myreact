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

function ListBlackListedStocks (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading ListBlackListedStocks'/>;
  }
  else
  {
  var metaData=[
    columnMetadata.stockNameWithOptions(),
    columnMetadata.impact(),
    columnMetadata.returnPercent(),
    columnMetadata.investment(),
    columnMetadata.absReturn(),
    columnMetadata.bankReturn(),
    columnMetadata.quantity()
  ];

    return (
      <div>
        <PanelWrapper header='Black List'>
          <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="20"
          columns={["stockName","impactOnAverageReturn","returnTillDate","totalInvestment","totalReturn","totalReturnIfBank","quantity"]}
          columnMetadata={metaData} useFixedHeader={true}/>
        </PanelWrapper>
      </div>
    )
  }
}

ListBlackListedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = ListBlackListedStocks
