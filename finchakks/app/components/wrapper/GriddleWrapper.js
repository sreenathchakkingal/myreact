var React = require('react');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');

var GriddleWrapper = React.createClass({
  render: function () {
    var bodyHeight = typeof this.props.bodyHeight==='undefined' ? 400 : this.props.bodyHeight;
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
