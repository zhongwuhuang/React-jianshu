import { fromJS } from 'immutable' //避免不小心更改仓库的数据
import * as constants from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll:true
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      console.log(action);
      return state.merge({
        'topicList':fromJS(action.topicList),
        'articleList':fromJS(action.articleList),
        'recommendList':fromJS(action.recommendList)
      })
    case constants.ADD_HOME_LIST:
      console.log(action);
      return state.merge({
        'articleList':state.get('articleList').concat(action.articleList),
        'articlePage':action.nextPage
      })
    case constants.TOOGLE_SCROLL_TOP:
      console.log(action);
      return state.set('showScroll',action.show)
    default:
      return state
  }
}