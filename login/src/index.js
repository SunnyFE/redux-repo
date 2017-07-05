import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import App from './app'
import configureStore from '/store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory,store)

render(
  <App store = {store} history = {history}></App>,
  document.getElementById('root')
)