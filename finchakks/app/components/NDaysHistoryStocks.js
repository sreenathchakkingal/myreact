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
      columnMetadata.industry(),
      columnMetadata.minValue(),
      columnMetadata.minValueDate(),
      columnMetadata.maxValue(),
      columnMetadata.maxValueDate(),
      columnMetadata.latestClosePriceMinimum()
    ];

    var stockRatingRows = [];
    var watchListColumns=["stockName", "simpleMovingAverageAndSellDeltaNormalized", "netNDaysGain",
    "stockRatingValue", "investmentRatio", "industryInvestmentRatio",
    "sellPrice", "simpleMovingAverage",
    "nDay1Gain","nDay2Gain","nDay3Gain","nDay4Gain","nDay5Gain","nDay6Gain", "industry"];

    var minMaxColumns=["stockName", "sellPrice","latestClosePriceMinimum",
    "minValue", "minValueDate","maxValue", "maxValueDate",
     "simpleMovingAverageAndSellDeltaNormalized", "netNDaysGain",
    "stockRatingValue", "simpleMovingAverage","nDay1Gain","nDay2Gain"];

    if(typeof props.nDaysMinOrMaxStocks!='undefined' && props.nDaysMinOrMaxStocks.length!=0)
    {
      stockRatingRows.push(
        <PanelWrapper header='Stocks that hit min/max' key='minMax'>
          <GriddleWrapper results={props.nDaysMinOrMaxStocks}
          columns={minMaxColumns}
          columnMetadata={metaData}/>
        </PanelWrapper>
          )
    }

    if(typeof props.nDaysWatchlistedStocks!='undefined' && props.nDaysWatchlistedStocks.length!=0)
    {
      stockRatingRows.push(
            <PanelWrapper header='Watch List' key='watchlist'>
              <GriddleWrapper results={props.nDaysWatchlistedStocks}
              columns={watchListColumns}
              columnMetadata={metaData} bodyHeight={800}/>
            </PanelWrapper>
          )
    }
    return (
      <div>
        {stockRatingRows}
      </div>
    )
  }
}

NDaysHistoryStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  nDaysWatchlistedStocks: PropTypes.array,
  nDaysMinOrMaxStocks: PropTypes.array
}

module.exports = NDaysHistoryStocks
