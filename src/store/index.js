import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  // 正确使用thunk中间件
  applyMiddleware(thunk)
))

export default store