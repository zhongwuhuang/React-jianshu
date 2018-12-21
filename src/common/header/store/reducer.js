import * as constants from './actionTypes'
import {fromJS} from 'immutable' //避免不小心更改仓库的数据

const defaultState = fromJS({
  focused:false,
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1
})

export default (state=defaultState,action)=>{
  // if (action.type === constants.SEARCH_FOCUS) {
  //   // immutable对象的set方法，会结合之前immutable对象的值
  //   // 和设置的值，返回一个全新的对象
  //   return state.set('focused',true)
  //   // return {
  //   //   focused:true
  //   // }
  // }
  // if (action.type === constants.SEARCH_BLUR) {
  //   return state.set('focused',false)
  //   // return {
  //   //   focused:false
  //   // }
  // }
  // if (action.type === constants.CHANGE_LIST) {
  //   return state.set('list',action.data)
  // }
  // return state

  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage',action.totalPage)
      return state.merge({
        'list':action.data,
        'totalPage':action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case constants.CHANGE_PAGE:
      return state.set('page',action.page)
    default:
      return state
  }
} 