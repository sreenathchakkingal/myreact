var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelper');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');


var ConfirmBattleContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo:[]
    }
  },

  componentWillMount: function()
  {
    console.log('componentWillMount');
    //fetch the git hub info here
  },

  componentDidMount: function()
  {
    console.log('componentDidMount');
    var query=this.props.location.query;
    githubHelper.getPlayersInfo([query.playerOne, query.playerTwo ]).
    then(function(players)
  {
    this.setState({
      isLoading:false,
      playerInfo: [players[0], players[1]]
    })
  }.bind(this))
    //fetch the git hub info here
  },

  componentWillReceiveProps: function()
  {
    console.log('componentWillReceiveProps');
    //fetch the git hub info here
  },

    componentWillUnmount: function()
    {
      console.log('componentWillUnmount');
      //fetch the git hub info here
    },

handleInitiateBattle: function()
{
this.context.router.push({
  pathname:'/results',
  state:{
    playerInfo: this.state.playerInfo
  }
})
},

  render: function () {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}
        playersInfo={this.state.playerInfo}
        onInitiateBattle={this.handleInitiateBattle}
      />
    )
  }

});

module.exports = ConfirmBattleContainer;
