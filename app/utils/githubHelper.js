var axios = require('axios');
var param = "";

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function calculateScores (players) {
console.log(players[0].followers * 3 + players[0].totalStars);
console.log(players[1].followers * 3 + players[1].totalStars);
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}


var helpers = {

  battle: function(players) {
    
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])//waits for the promises to be completed
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  },

getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
        return getUserInfo(username);
    })).then(function(info) {
        return info.map(function(user) {
            return user.data;
        })
        console.log(info);
    }).catch(function(err) {
        console.warn('Error in getPlayersInfo ', err);
    })
}

};

module.exports = helpers;
