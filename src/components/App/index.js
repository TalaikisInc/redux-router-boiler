import React from 'react'
import { connect } from 'react-redux'

import * as containers from '../../containers'

const App = ({ page }) => {
  console.log('page')
  console.log(page)
  const Container = containers[page]
  return <Container />
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(App)
