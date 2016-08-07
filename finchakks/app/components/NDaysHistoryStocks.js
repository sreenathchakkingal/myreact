var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');
var Panel = require('react-bootstrap/lib/Panel');

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
    var metaData=columnMetadata.listColumnMetadata();

    return (
    <div>
      <Panel header='Watch List' bsStyle="info">
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
      </Panel>
    </div>
    )
  }
}

NDaysHistoryStocks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = NDaysHistoryStocks
