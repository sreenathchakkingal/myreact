var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var PropTypes = React.PropTypes;
var Table = require('react-bootstrap/lib/Table');
var PanelWrapper = require('./wrapper/PanelWrapper');
var formatter = require('../utils/formatter');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function ProfitAndLoss (props) {
  if(props.isLoading ===true )
  {
    return (
      <div>
      <PanelWrapper header='Summary Loading...'/>
    </div>
    )
  }
  else
  {
    var stockData = props.stocksInfo;
    return (
      <div>
        <PanelWrapper header='Summary'>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Return(%)</th>
                <th>Prev Return(%)</th>
                <th>Diff</th>
                <th>Investment</th>
                <th>Return</th>
                <th>Prev Return</th>
                <th>Diff</th>
                <th>Return(Bank)</th>
                <th>Diff compared to Bank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formatter.convertToPercent(stockData.averageReturn)}</td>
                <td>{formatter.convertToPercent(stockData.prevAverageReturn)}</td>
                <td>{formatter.convertToPercent(stockData.diffInCurrentAndPrevAverageReturn)}</td>
                <td>{formatter.moneyFormat(stockData.totalInvestment)}</td>
                <td>{formatter.moneyFormat(stockData.totalReturn)}</td>
                <td>{formatter.moneyFormat(stockData.prevTotalReturn)}</td>
                <td>{formatter.moneyFormat(stockData.diffInCurrentAndPrevTotalReturn)}</td>
                <td>{formatter.moneyFormat(stockData.totalReturnIfBank)}</td>
                <td>{formatter.moneyFormat(stockData.totalReturnVsIfBank)}</td>
              </tr>
            </tbody>
          </Table>
        </PanelWrapper>
      </div>
    )
  }
}

ProfitAndLoss.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo: PropTypes.shape({
    averageReturn: PropTypes.number.isRequired,
    prevAverageReturn: PropTypes.number.isRequired,
    diffInCurrentAndPrevAverageReturn: PropTypes.number.isRequired,
    totalInvestment: PropTypes.number.isRequired,
    totalReturn: PropTypes.number.isRequired,
    prevTotalReturn: PropTypes.number.isRequired,
    diffInCurrentAndPrevTotalReturn: PropTypes.number.isRequired,
    totalInvestment: PropTypes.number.isRequired,
    totalReturnIfBank: PropTypes.number.isRequired,
    totalReturnVsIfBank: PropTypes.number.isRequired
  })
}

module.exports = ProfitAndLoss
