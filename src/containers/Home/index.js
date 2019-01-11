import React, { Fragment } from 'react'
import Link from 'redux-first-router-link'

const Home = () => {
  return (
    <Fragment>
      <h3>Home</h3>
      <Link to={{ type: 'CATEGORY', payload: { id: 'test-category', category: 'etst category 2' } }}>Test category</Link>
    </Fragment>
  )
}

export default Home
