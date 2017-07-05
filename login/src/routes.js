import React from 'react'
import {Route} from 'react-router'
import Entry from './container/entry'
import UserPage from './container/user-page'
import RepoPage from './container/repo-page'

export default <Route path='/' component={Entry}>
  <Route path='/:login/:name' component={RepoPage} />
  <Route path='/:login' component={UserPage} />
</Route>
