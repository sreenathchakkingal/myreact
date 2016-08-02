var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

function puke(obj)
{
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function StartOver()
{
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results (props) {

  if(props.isLoading ===true)
  {
    console.log('returning from Results Loading');
    return(
      <p> LOADING.... </p>
    )
  }

  console.log('in Results.js ', props.scores[0], props.scores[1]);

  if(props.scores[0] === props.scores[1])
  {
    return(
      <MainContainer>
        <h1>Its a tie</h1>
        <StartOver/>
      </MainContainer>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      < div className = 'col-sm-8 col-sm-offset-2' >

        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playerInfo[winningIndex]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playerInfo[losingIndex]} />
        </UserDetailsWrapper>

      </div>
      <StartOver/>
    </MainContainer>

  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo:PropTypes.array.isRequired,
  scores:PropTypes.array.isRequired
}

module.exports = Results;
