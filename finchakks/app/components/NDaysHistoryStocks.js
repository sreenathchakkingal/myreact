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

    var stockRatingRows = [];
    var columns=["stockName", "simpleMovingAverageAndSellDeltaNormalized", "netNDaysGain",
    "stockRatingValue", "investmentRatio", "industryInvestmentRatio",
    "sellPrice", "simpleMovingAverage",
    "nDay1Gain","nDay2Gain","nDay3Gain","nDay4Gain","nDay5Gain","nDay6Gain", "industry"];

    if(typeof props.stocksWithMin!='undefined' && props.stocksWithMin.length!=0)
    {
      stockRatingRows.push(
        <PanelWrapper header='Stocks that hit min' key='min'>
          <GriddleWrapper results={props.stocksWithMin}
          columns={columns}
          columnMetadata={metaData}/>
        </PanelWrapper>
          )
    }

    if(typeof props.stocksWithoutMin!='undefined' && props.stocksWithoutMin.length!=0)
    {
      stockRatingRows.push(
            <PanelWrapper header='Watch List' key='watchlist'>
              <GriddleWrapper results={props.stocksWithoutMin}
              columns={columns}
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
  stocksWithoutMin: PropTypes.array,
  stocksWithMin: PropTypes.array
}

module.exports = NDaysHistoryStocks
