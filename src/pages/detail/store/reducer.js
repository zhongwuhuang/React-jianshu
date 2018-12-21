import { fromJS } from 'immutable' //避免不小心更改仓库的数据
import * as constants from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: '',
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      console.log(action);
      return state.merge({
        'title':fromJS(action.title),
        'content': fromJS(action.content)
      })
    default:
      return state
  }
}