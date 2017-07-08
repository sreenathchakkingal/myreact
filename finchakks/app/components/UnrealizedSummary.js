var React = require('react');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var PanelWrapper = require('./wrapper/PanelWrapper');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function UnrealizedSummary (props) {
  // if(props.isLoading ===true )
  // {
  // return <Loading text='Loading UnrealizedSummary'/>;
  // }
  // else
  // {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.returnPercent(),
      columnMetadata.quantity(),
      columnMetadata.investment(),
      columnMetadata.absReturn(),
      columnMetadata.bankReturn(),
      columnMetadata.impact(),
      columnMetadata.lowerReturnPercentTarget(),
      columnMetadata.upperReturnPercentTarget(),
      columnMetadata.lowerSellPriceTarget(),
      columnMetadata.upperSellPriceTarget()
    ];

    var columnNames=[
      "stockName",
      "returnTillDate",
      "quantity",
      "totalInvestment",
      "totalReturn",
      "totalReturnIfBank",
      "impactOnAverageReturn"
    ]

    return (
      <PanelWrapper header='Unrealized Summary'>
        <GriddleWrapper results={props.stocksInfo}
        columns={columnNames}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  // }
}

UnrealizedSummary.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = UnrealizedSummary
