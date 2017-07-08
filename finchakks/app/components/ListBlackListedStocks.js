var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function ListBlackListedStocks (props) {
  // if(props.isLoading ===true )
  // {
  // return <Loading text='Loading ListBlackListedStocks'/>;
  // }
  // else
  // {
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
          <GriddleWrapper results={props.stocksInfo}
          columns={["stockName","impactOnAverageReturn","returnTillDate","totalInvestment","totalReturn","totalReturnIfBank","quantity"]}
          columnMetadata={metaData} />
        </PanelWrapper>
      </div>
    )
  // }
}

ListBlackListedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = ListBlackListedStocks
