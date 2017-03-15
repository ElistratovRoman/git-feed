//TODO: offline work
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'


// if (!window.localStorage.getItem('gitFeedCache')) {
//   window.localStorage.setItem('gitFeedCache', JSON.stringify([]))
// }

const store = configureStore()

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,

    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App))
}