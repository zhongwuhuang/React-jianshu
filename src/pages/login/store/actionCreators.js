import * as constants from './actionTypes'
import {fromJS} from 'immutable' //避免不小心更改仓库的数据
import axios from 'axios'

const changeLogin=()=>({
  type: constants.CHANGE_LOGIN,
  value:'1'
})

export const login = (account, password) => {
  return (dispatch)=>{
    axios.get('./api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data
      console.log(result);
      if (result) {
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    }).catch(()=>{
      console.log('error');
    })
  }
}

export const logout = ()=> ({
  type: constants.LOGOUT,
  value: '0'
})

