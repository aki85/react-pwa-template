import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import auth from './auth'

const reducer = combineReducers({
  auth,
  form: reduxFormReducer,
})

const rootReducer = (state, action) => {

  // state = undefined

  return reducer(state, action)
}
export default rootReducer