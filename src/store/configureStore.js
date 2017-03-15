import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import apiMiddleware from 'middlewares/api'
import rootReducer from '../reducers'

export default function configureStore(initialState={}) {
  let devTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
                  ? window.devToolsExtension()
                  : f => f

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk
      ),
      devTools
    )
  )

  // Enable Webpack hot module replacement for reducers
  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer( require('reducers').default )
  //   })
  // }

  return store
}
