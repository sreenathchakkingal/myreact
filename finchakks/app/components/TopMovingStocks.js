var React = require('react');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');

function TopMovingStocks (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading TopMovingStocks'/>;
  }
  else
  {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.currentReturnTillDate(),
      columnMetadata.prevReturnTillDate(),
      columnMetadata.diffReturnTillDate()
    ];

    return (
      <PanelWrapper header='Top Movers'>
        <GriddleWrapper results={props.stocksInfo}
        columns={["stockName","currentReturnTillDate","prevReturnTillDate", "diffReturnTillDate"]}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  }
}

TopMovingStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = TopMovingStocks
