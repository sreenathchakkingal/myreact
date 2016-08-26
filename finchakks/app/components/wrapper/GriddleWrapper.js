var React = require('react');
var PropTypes = React.PropTypes;
var Griddle = require('griddle-react');

var GriddleWrapper = React.createClass({
  render: function () {
    console.log('GriddleWrapper.results ', this.props.results);
    return (
      <div>
        <Griddle results={this.props.results}  columns={this.props.columns} columnMetadata={this.props.columnMetadata}
        tableClassName="table" showFilter={true} resultsPerPage="10"
        enableInfiniteScroll={true} bodyHeight={400} showSettings={true} useFixedHeader={true}
        />
      </div>
    )
  }
});

GriddleWrapper.propTypes = {
  results: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  columnMetadata: PropTypes.array.isRequired

}

module.exports = GriddleWrapper;
