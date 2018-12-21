import * as constants from './actionTypes'
import {fromJS} from 'immutable' //避免不小心更改仓库的数据
import axios from 'axios'

export const searchFocus = ()=>({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = ()=>({
  type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length/10)
})

export const getList = ()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
      console.log(res.data.data);
      dispatch(changeList(res.data.data))
    }).catch(()=>{
      console.log('error');
    })
  }
}
