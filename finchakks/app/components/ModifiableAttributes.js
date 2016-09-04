var React = require('react');
var Form  = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Table = require('react-bootstrap/lib/Table');
var finchakksapi = require('../utils/finchakksapi');
var SelectorWrapper = require('./wrapper/SelectorWrapper');
var StockRatingsWrapper = require('./wrapper/StockRatingsWrapper');

var ModifiableAttributes = React.createClass({
  getInitialState: function () {
     return {
       buttonSytle :'',
       buttonText : '',
       buttonDisabled : false,
       moneycontrolStockName : '',
       isWatchListed : '',
       lowerReturnPercentTarget : 0.0,
       upperReturnPercentTarget : 0.0,
       stockRatings:[]
     }
   },

  handleMoneyControlStockNameChange(e) {
    this.setState({ moneycontrolStockName: e.target.value });
  },

  handleIsWatchlistedChange(e) {
    this.setState({ isWatchListed: e.target.value });
  },

  handleLowerReturnPercentTargetChange(e) {
    this.setState({ lowerReturnPercentTarget: e.target.value });
  },

  handleUpperReturnPercentTargetChange(e) {
    this.setState({ upperReturnPercentTarget: e.target.value });
  },

  handleRatingsChange(index, e) {
    var stockRatings = this.state.stockRatings.slice();
    stockRatings[index] = e.target.name;
    stockRatings[index+1] = e.target.value;
    this.setState({
      stockRatings: stockRatings
    });
  },

  handleSubmit(e) {
    this.setState({
      buttonSytle :'info',
      buttonText : 'Updating Changes',
      buttonDisabled : true
     });

    finchakksapi.updateStockAttributes(this.props.stocksInfo.items[0].stockName,
       this.state.moneycontrolStockName, this.state.isWatchListed,
       this.state.lowerReturnPercentTarget, this.state.upperReturnPercentTarget,
       this.state.stockRatings).
    then(function(updatedResponse)
    {
      var bStyle = updatedResponse.success ? 'success' : 'error';
      var bText = updatedResponse.success ? 'Updated Attributes' : updatedResponse.statusMessage;
      this.setState({
        buttonSytle : bStyle,
        buttonText : bText,
        buttonDisabled : true
      })
    }.bind(this))

  },

  componentWillReceiveProps: function () {
    this.setState({
      buttonSytle :'primary',
      buttonText : 'Update Changes',
      buttonDisabled : false
    })
   },

  render: function () {
    var refreshRequestTemp=this.props.refreshRequest;
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
                                  onChange={this.handleRatingsChange.bind(this, index)}
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
                <td><FormControl type="text" onChange={this.handleMoneyControlStockNameChange}/> </td>
              </tr>
              <tr>
                <td>Is Watch Listed </td>
                <td>{info.isWatchListed}</td>
                <td>
                  <SelectorWrapper  onChange={this.handleIsWatchlistedChange}
                                    defaultValue = {defaultWatchListed}
                                    options={wathListOptions} />
                </td>
              </tr>
              <tr>
                <td>Lower Target Percent </td>
                <td>{info.lowerReturnPercentTarget}</td>
                <td><FormControl type="text" onChange={this.handleLowerReturnPercentTargetChange}/> </td>
              </tr>
              <tr>
                <td>Upper Target Percent </td>
                <td>{info.upperReturnPercentTarget}</td>
                <td><FormControl type="text" onChange={this.handleUpperReturnPercentTargetChange}/> </td>
              </tr>
              {stockRatingRows}
            </tbody>
          </Table>

          <Button bsStyle={this.state.buttonSytle} disabled={this.state.buttonDisabled} bsSize="small" type="submit" onClick={this.handleSubmit}>
          {this.state.buttonText}
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


function ModifiableAttributes (props) {


}

module.exports = ModifiableAttributes
