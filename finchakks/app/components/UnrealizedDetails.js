var React = require('react');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function UnrealizedDetails (props) {
  // if(props.isLoading ===true )
  // {
  // return <Loading text='Loading UnrealizedDetails'/>;
  // }
  // else
  // {
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
    var columnNames=["stockName","returnTillDate","buyDate","buyPrice","duration","sellPrice",
      "bankSellPrice","quantity","totalInvestment", "totalReturn", "totalReturnIfBank", "diff"];

    return (
      <PanelWrapper header='Unrealized Details'>
        <GriddleWrapper results={props.stocksInfo}
        columns={columnNames}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  // }
}

UnrealizedDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = UnrealizedDetails
