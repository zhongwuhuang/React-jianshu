import { fromJS } from 'immutable' //避免不小心更改仓库的数据
import * as constants from './actionTypes'

const defaultState = fromJS({
  isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : localStorage.setItem('isLogin','0')
  // isLogin:'0'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      localStorage.setItem('isLogin', '1')
      return state.set('isLogin',action.value)
    case constants.LOGOUT:
      localStorage.setItem('isLogin', '0')
      return state.set('isLogin',action.value)
    default:
      return state
  }
}