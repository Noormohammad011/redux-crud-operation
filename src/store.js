import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  taskListReducer,
  taskDetailsReducer,
  taskDeleteReducer,
  taskCreateReducer,
  taskUpdateReducer,
} from './reducers/taskReducers'

// Reducers
const reducer = combineReducers({
  tasksList: taskListReducer,
  taskDetails: taskDetailsReducer,
  taskDelete: taskDeleteReducer,
  taskCreate: taskCreateReducer,
  taskUpdate: taskUpdateReducer,
})

//localstorage
const initialState = {}
//middleware
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
