var React = require('react');
var finchakksapi = require('../utils/finchakksapi');
var Loading = require('./Loading');
var columnMetadata = require('./metadata/columnMetadata');
var PropTypes = React.PropTypes;
var Table = require('react-bootstrap/lib/Table');
var formatter = require('../utils/formatter');

function puke(obj)
{
  return <pre>{JSON.stringify(obj , null, ' ')}</pre>
}

function ProfitAndLoss (props) {
  if(props.isLoading ===true )
  {
  return <Loading text='Loading ProfitAndLoss'/>;
  }
  else
  {
    var metaData=columnMetadata.listColumnMetadata();
    var stockData = props.stocksInfo;
    return (
      <div>
      <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Return(%)</th>
          <th>Investment</th>
          <th>Return</th>
          <th>Return(Bank)</th>
          <th>Diff</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{formatter.convertToPercent(stockData.averageReturn)}</td>
        <td>{formatter.moneyFormat(stockData.totalInvestment)}</td>
        <td>{formatter.moneyFormat(stockData.totalReturn)}</td>
        <td>{formatter.moneyFormat(stockData.totalReturnIfBank)}</td>
        <td>{formatter.moneyFormat(stockData.totalReturnVsIfBank)}</td>
      </tr>
      </tbody>
      </Table>
      </div>
    )
  }
}

ProfitAndLoss.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stocksInfo: PropTypes.shape({
    averageReturn: PropTypes.number.isRequired,
    totalInvestment: PropTypes.number.isRequired,
    totalReturn: PropTypes.number.isRequired,
    totalInvestment: PropTypes.number.isRequired,
    totalReturnIfBank: PropTypes.number.isRequired,
    totalReturnVsIfBank: PropTypes.number.isRequired
  })
}

module.exports = ProfitAndLoss
