var React = require('react');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');

var GriddleWrapper = React.createClass({
  render: function () {
    var bodyHeight=0;
    if(typeof this.props.bodyHeight==='undefined')
    {
      var sizeOfResultMultipied=this.props.results.length * 35;
      //number chosen after trial and error for a good display. If the size goes beyound 400, the grid is not displayed right
      bodyHeight = sizeOfResultMultipied <= 400 ? sizeOfResultMultipied : 400;
    }
    else
    {
      bodyHeight = this.props.bodyHeight;
    }
    return (
      <div>
        <Griddle results={this.props.results}  columns={this.props.columns} columnMetadata={this.props.columnMetadata}
        tableClassName="table" showFilter={true} resultsPerPage="10"
        enableInfiniteScroll={true} bodyHeight={bodyHeight} showSettings={true} useFixedHeader={true}
        />
      </div>
    )
  }
});

GriddleWrapper.propTypes = {
  results: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  columnMetadata: PropTypes.array.isRequired,
  bodyHeight: PropTypes.number
}

module.exports = GriddleWrapper;
