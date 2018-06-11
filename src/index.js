import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './Root.js'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Root store={store} />,
  document.getElementById('root')
)