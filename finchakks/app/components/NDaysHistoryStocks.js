var React = require('react');
var PropTypes = React.PropTypes;
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PanelWrapper = require('./wrapper/PanelWrapper');
var GriddleWrapper = require('./wrapper/GriddleWrapper');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function NDaysHistoryStocks (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading NDaysHistoryStocks'/>;
  }
  else
  {
    var metaData=[
      columnMetadata.stockNameWithOptions(),
      columnMetadata.smvPercent(),
      columnMetadata.netNDaysGain(),
      columnMetadata.score(),
      columnMetadata.investmentRatio(),
      columnMetadata.industryInvestmentRatio(),
      columnMetadata.sellPrice(),
      columnMetadata.simpleMovingAverage(),
      columnMetadata.nDay1Gain(),
      columnMetadata.nDay2Gain(),
      columnMetadata.nDay3Gain(),
      columnMetadata.nDay4Gain(),
      columnMetadata.nDay5Gain(),
      columnMetadata.nDay6Gain(),
      columnMetadata.industry()
    ];

    return (
    <div>
      <PanelWrapper header='Watch List'>
        <GriddleWrapper results={props.stocksInfo}
        columns={
        ["stockName", "simpleMovingAverageAndSellDeltaNormalized", "netNDaysGain",
        "stockRatingValue", "investmentRatio", "industryInvestmentRatio",
        "sellPrice", "simpleMovingAverage",
        "nDay1Gain","nDay2Gain","nDay3Gain","nDay4Gain","nDay5Gain","nDay6Gain", "industry"]
        }
        columnMetadata={metaData} />
      </PanelWrapper>
    </div>
    )
  }
}

NDaysHistoryStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo: PropTypes.array.isRequired
}

module.exports = NDaysHistoryStocks
