var React = require('react');
var PropTypes = React.PropTypes;
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Table = require('react-bootstrap/lib/Table');
var SelectorWrapper = require('./wrapper/SelectorWrapper');
var StockRatingsWrapper = require('./wrapper/StockRatingsWrapper');

var ModifiableAttributes = React.createClass({

  render: function () {
    var yes = 'Yes';
    var no = 'No';
    if(this.props.isRetrieved ===true )
    {
      var info = this.props.stocksInfo.items[0];
      var defaultWatchListed =info.watchListed ? yes : no ;
      var wathListOptions=['Yes', 'No'];
      var ratingValues=['Good', 'Average', 'Bad', 'Not Rated'];

      var stockRatingRows = [];
      for (var i=0; i < info.ratings.length ; i++) {
          var ratingName = info.ratings[i].ratingName;
          var ratingValue = info.ratings[i].ratingValue;
          var index=i*2;
          stockRatingRows.push(
            <StockRatingsWrapper key={ratingName} name = {ratingName} ratingName={ratingName}
                                  ratingValue={ratingValue}
                                  onChange={this.props.onRatingsChange.bind(this, index)}
                                  defaultValue = {ratingValue}
                                  options={ratingValues} />
          );
      }

      return(
        <div>
          <h1> Stock Name : {info.stockName} </h1>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Attribute Name</th>
                <th>Current Value</th>
                <th>New Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Money Control Name</td>
                <td>{info.moneycontrolName}</td>
                <td><FormControl type="text" onChange={this.props.onMoneyControlStockNameChange}/> </td>
              </tr>
              <tr>
                <td>Is Watch Listed </td>
                <td>{info.isWatchListed}</td>
                <td>
                  <SelectorWrapper  onChange={this.props.onIsWatchlistedChange}
                                    defaultValue = {defaultWatchListed}
                                    options={wathListOptions} />
                </td>
              </tr>
              <tr>
                <td>Lower Target Percent </td>
                <td>{info.lowerReturnPercentTarget}</td>
                <td><FormControl type='text' defaultValue='0.0'  onChange={this.props.onLowerReturnPercentTargetChange}/> </td>
              </tr>
              <tr>
                <td>Upper Target Percent </td>
                <td>{info.upperReturnPercentTarget}</td>
                <td><FormControl type='text' defaultValue='0.0' onChange={this.props.onUpperReturnPercentTargetChange}/> </td>
              </tr>
              {stockRatingRows}
            </tbody>
          </Table>

          <Button bsStyle={this.props.buttonSytle} disabled={this.props.buttonDisabled} bsSize="small" type="submit"
           onClick={this.props.onSubmit}>
          {this.props.buttonText}
          </Button>

        </div>
      )
    }
    else
    {
      return <div/>;
    }
  }
})

ModifiableAttributes.propTypes = {
  isRetrieved: PropTypes.bool.isRequired,
  stocksInfo: PropTypes.array.isRequired,
  onRatingsChange: PropTypes.func.isRequired,
  onMoneyControlStockNameChange: PropTypes.func.isRequired,
  onIsWatchlistedChange: PropTypes.func.isRequired,
  onLowerReturnPercentTargetChange: PropTypes.func.isRequired,
  onUpperReturnPercentTargetChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonSytle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
}

module.exports = ModifiableAttributes
