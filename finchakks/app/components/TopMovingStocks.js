var React = require('react');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');
var sharedFunctions = require('../utils/sharedFunctions');

function TopMovingStocks (props) {
  // if(props.isLoading ===true )
  // {
  // return <Loading text='Loading Top Movers' />;
  // }
  // else
  // {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.currentReturnTillDate(),
      columnMetadata.prevReturnTillDate(),
      columnMetadata.diffReturnTillDate()
    ];

    return (
      <PanelWrapper header={sharedFunctions.appendLoadingStatus('Top Movers', props.isLoading)}>
        <GriddleWrapper results={props.stocksInfo}
        columns={["stockName","currentReturnTillDate","prevReturnTillDate", "diffReturnTillDate"]}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  // }
}

TopMovingStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = TopMovingStocks
