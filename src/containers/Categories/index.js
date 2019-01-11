import React from 'react'
import { connect } from 'react-redux'

const Categories = ({ category }) => {
  console.log('category')
  console.log(category)
  return (
    <h3>{`Category ${category}`}</h3>
  )
}

const mapStateToProps = ({ location }) => ({
  category: location.payload.category
})

const ConnectedCategories = connect(mapStateToProps)(Categories)

export default ConnectedCategories


/*
import Link from 'redux-first-router-link'

// as a standard href path string:
<Link to='/list/db-graphql'>DB & GRAPHQL</Link>

// as an array of path segments:
<Link to={['list', 'react-redux']}>REACT & REDUX</Link>

// as an action object (RECOMMENDED APPROACH SO YOU CAN CHANGE ALL URLs FROM YOUR ROUTESMAP):
<Link to={{ type: 'LIST', payload: { category: 'fp' } }}>FP</Link>
*/