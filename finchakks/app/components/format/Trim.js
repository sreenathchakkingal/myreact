var React = require('react');
var SplitButton = require('react-bootstrap/lib/SplitButton');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var UnrealizedDetailsSelectedContainer = require('../../containers/UnrealizedDetailsSelectedContainer');
var TargetHistorySelectedContainer = require('../../containers/TargetHistorySelectedContainer');
var Trim = React.createClass({
  getInitialState() {
    return {
      showUnrealizedModal: false,
      showTargetHistoryModal: false,
     };
  },

  closeUnrealizedModal() {
    this.setState({ showUnrealizedModal: false });
  },

  openUnrealizedModal() {
    this.setState({ showUnrealizedModal: true });
  },

  closeTargetHistoryModal() {
    this.setState({ showTargetHistoryModal: false });
  },

  openTargetHistoryModal() {
    this.setState({ showTargetHistoryModal: true });
  },

  render: function(){
    var name=this.props.data;
    var result=name.substring(0,8);
    var unrealizedLink='#selectedUnrealizedsasi/'+name;
    return (
      <div>
        <SplitButton bsStyle="info" bsSize="small" title={result} id={'split-button-basic-${i}'}>
          <MenuItem eventKey="1" onClick={this.openUnrealizedModal}>Unrealized</MenuItem>
          <MenuItem eventKey="1" onClick={this.openTargetHistoryModal}>Target History</MenuItem>

          <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.showUnrealizedModal} onHide={this.closeUnrealizedModal}>
            <Modal.Body>
              <UnrealizedDetailsSelectedContainer stockName={name}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeUnrealizedModal}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.showTargetHistoryModal} onHide={this.closeTargetHistoryModal}>
            <Modal.Body>
              <TargetHistorySelectedContainer stockName={name}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeTargetHistoryModal}>Close</Button>
            </Modal.Footer>
          </Modal>

        </SplitButton>
    </div>
    )
  }
})

module.exports = Trim;
