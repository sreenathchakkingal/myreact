var React = require('react');
var PropTypes = React.PropTypes;
// var Loading = require('./Loading');
var AppendPercent = require('./format/AppendPercent');
var ConvertToPercent = require('./format/ConvertToPercent');
var PanelWrapper = require('./wrapper/PanelWrapper');
var GriddleWrapper = require('./wrapper/GriddleWrapper');
var sharedFunctions = require('../utils/sharedFunctions');

function TargetHistorySelected (props) {
  // if(props.isLoading ===true )
  // {
  // return <Loading text='Loading TargetHistorySelected'/>;
  // }
  // else
  // {
    var metaData=[
      {
        "columnName": "stockName",
        "displayName": "Stock Name"
      },
      {
        "columnName": "businessDate",
        "displayName": "Date"
      },
      {
        "columnName": "lowerReturnPercentTarget",
        "displayName": "L. Target Return %",
        "customComponent": AppendPercent
      },
      {
        "columnName": "upperReturnPercentTarget",
        "displayName": "U. Target Return %",
        "customComponent": AppendPercent
      }
    ];

    var stockName = props.isLoading ? ''  : props.stocksInfo[0].stockName;

    var headerName = sharedFunctions.appendLoadingStatus('Target History Details',
                      props.isLoading)+' : ' + stockName;
    return (
      <PanelWrapper header={headerName}>
        <GriddleWrapper results={props.stocksInfo}
        columns={["stockName","businessDate","lowerReturnPercentTarget","upperReturnPercentTarget"]}
        columnMetadata={metaData}
        />
      </PanelWrapper>
    )
  // }
}

TargetHistorySelected.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo:PropTypes.array.isRequired
}

module.exports = TargetHistorySelected
