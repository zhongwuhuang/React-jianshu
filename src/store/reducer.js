import {combineReducers} from 'redux-immutable'

import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import detailReducer from '../pages/detail/store/reducer'
import loginReducer from '../pages/login/store/reducer'

// 生成的数据就是immutable格式对象
export default combineReducers({
  header11: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})