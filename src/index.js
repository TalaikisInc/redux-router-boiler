import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
const initialState = {}
const { store } = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )

serviceWorker.unregister();
