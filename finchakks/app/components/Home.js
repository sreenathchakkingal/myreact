var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Home () {
  return (
    <div>
      <h1>finchakks</h1>
      <Link to='/listBlackListedStocks'>
        <button type='button' className='btn btn-lg btn-success'>List Black Listed Stocks</button>
      </Link>
      <Link to='/orgGridExample'>
        <button type='button' className='btn btn-lg btn-success'> orgGridExample</button>
      </Link>
      </div>
  )
}

module.exports = Home;
