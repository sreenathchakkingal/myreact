var React = require('react');
var PropTypes = React.PropTypes

function UserDetails (user) {
  return (
    <div>
      {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
      <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
      {user.info.name && <li className="list-group-item">Name: {user.info.name}</li>}
      <li className="list-group-item">Username: {user.info.login}</li>
      {user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
      {user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
      <li className="list-group-item">Followers: {user.info.followers}</li>
      <li className="list-group-item">Following: {user.info.following}</li>
      <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li className="list-group-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    averageReturn: PropTypes.number.isRequired,
    totalInvestment: PropTypes.number.isRequired,
    totalReturn: PropTypes.number.isRequired,
    totalInvestment: PropTypes.number.isRequired,
    totalReturnIfBank: PropTypes.number.isRequired,
    totalReturnVsIfBank: PropTypes.number.isRequired
  })
}

module.exports = UserDetails;
