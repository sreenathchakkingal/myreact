var React = require('react');
var Loading = require('./Loading');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var NoDataComponent = require('./NoDataComponent');
var columnMetadata = require('./metadata/columnMetadata');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function StocksException (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading StocksException' />;
  }
  else
  {
    var metaData=[
      columnMetadata.stockNameWithoutOptions(),
      columnMetadata.exceptionComment()
    ];

    return (
        <Griddle customNoDataComponent={NoDataComponent}
         results={props.stocksInfo} columnMetadata={metaData}/>
    )
  }
}

StocksException.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array
}

module.exports = StocksException
