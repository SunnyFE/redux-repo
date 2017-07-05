import React, { Proptypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './devtools'
import { Route } from 'react-router'

//这里为何要套多一层，去掉div是否OK
const Root = ({store, history}) => (
  <Provider store={store}>
    <div>
      <Route routes={routes} history={history}>
        <DevTools />
      </Route>
    </div>
  </Provider>
)

Root.prototype = {
  store:Proptypes.object.isRequire,
  history:Proptypes.object.isRequire
}

export default Root