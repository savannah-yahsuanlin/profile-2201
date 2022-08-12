import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import users from './users'
import works from './works'
import schools from './schools'
import {persist, CACHE_KEY } from './helper'

const cachedState = localStorage.getItem(CACHE_KEY)
const useCache = !navigator.onLine && cachedState
const initialState = useCache ? JSON.parse(cachedState) : {}

const reducer = combineReducers({ users, works, schools })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './users'
export * from './works'
export * from './schools'
