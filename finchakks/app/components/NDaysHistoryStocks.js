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
        <Griddle results={props.stocksInfo} tableClassName="table" showFilter={true} resultsPerPage="10"
        columns={
        ["stockName", "simpleMovingAverageAndSellDeltaNormalized", "netNDaysGain",
        "stockRatingValue", "investmentRatio", "industryInvestmentRatio",
        "sellPrice", "simpleMovingAverage",
        "nDay1Gain","nDay2Gain","nDay3Gain","nDay4Gain","nDay5Gain","nDay6Gain", "industry"]
        }
        columnMetadata={metaData}
        enableInfiniteScroll={true} bodyHeight={400} showSettings={true}
        />
      </PanelWrapper>
    </div>
    )
  }
}

NDaysHistoryStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = NDaysHistoryStocks
