var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');
var PropTypes = React.PropTypes;

var PanelWrapper = React.createClass({
  render: function () {
    return (
      <div>
        <Panel header={this.props.header} bsStyle="info">
          {this.props.children}
        </Panel>
      </div>
    )
  }
});

PanelWrapper.propTypes = {
  header: PropTypes.string.isRequired
}

module.exports = PanelWrapper;
