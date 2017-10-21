var React = require('react');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var NoDataComponent = require('./NoDataComponent');
var columnMetadata = require('./metadata/columnMetadata');

class StocksException extends  React.Component
{

  render () {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.exceptionComment()
    ];
      return(
        <Griddle customNoDataComponent={NoDataComponent} showFilter={false}
         results={this.props.stocksInfo} columnMetadata={metaData} bodyHeight={100} />
      )
    }
}

StocksException.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array
}

module.exports = StocksException
