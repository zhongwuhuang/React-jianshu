import * as constants from './actionTypes'
import {fromJS} from 'immutable' //避免不小心更改仓库的数据
import axios from 'axios'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
const addHomeList = (result,nextPage) => ({
  type: constants.ADD_HOME_LIST,
  articleList: fromJS(result),
  nextPage
})

export const getHomeInfo = ()=>{
  return (dispatch)=>{
    axios.get('./api/home.json').then((res) => {
      const result = res.data.data
      console.log(result);
      dispatch(changeHomeData(result))
    }).catch(()=>{
      console.log('error');
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch)=>{
    axios.get('./api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      console.log(result);
      dispatch(addHomeList(result,page+1))
    }).catch(()=>{
      console.log('error');
    })
  }
}
export const toggleTopShow = (show) => ({
    type: constants.TOOGLE_SCROLL_TOP,
    show
})
