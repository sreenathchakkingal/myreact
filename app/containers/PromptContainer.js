var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('in getInitialState');
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      console.log('inside this.props.routeParams.playerOne if')
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      console.log('inside this.props.routeParams.playerOne else')
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
