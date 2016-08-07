var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var Panel = require('react-bootstrap/lib/Panel');
var AppendPercent = require('./format/AppendPercent');
var MoneyFormat = require('./format/MoneyFormat');
var ConvertToPercent = require('./format/ConvertToPercent');
var AppendPercentRoundedOff = require('./format/AppendPercentRoundedOff');
var ConvertToPercentRoundedOff = require('./format/ConvertToPercentRoundedOff');
var Trim = require('./format/Trim');

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
        <Panel header='Black List' bsStyle="info">
          <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="20"
          columns={["stockName","impactOnAverageReturn","returnTillDate","totalInvestment","totalReturn","totalReturnIfBank","quantity"]}
          columnMetadata={metaData}/>
        </Panel>
      </div>
    )
  }
}

ListBlackListedStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = ListBlackListedStocks
