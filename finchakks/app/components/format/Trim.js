var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Modal = require('react-bootstrap/lib/Modal');
var UnrealizedDetailsSelectedContainer = require('../../containers/UnrealizedDetailsSelectedContainer');

var Trim = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render: function(){
    var name=this.props.data;
    var result=name.substring(0,8);
    return (
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>{result}</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Unrealized Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UnrealizedDetailsSelectedContainer stockName={name}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
      </Modal>
    </div>
    )
  }
})

module.exports = Trim;