import * as constants from './actionTypes'
import axios from 'axios'

const changeDetail = (result) => ({
  type: constants.CHANGE_DETAIL,
  title: result.title,
  content: result.content
})

export const getDetail = (id) => {
  return (dispatch)=>{
    axios.get('/api/detail.json?id='+id).then((res) => {
      const result = res.data.data
      console.log(result);
      dispatch(changeDetail(result))
    }).catch(()=>{
      console.log('error');
    })
  }
}

