import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import persistState from "redux-localstorage"
import reducer from './reducers'

export default persistState()(createStore)(
  reducer,
  applyMiddleware(thunk)
)