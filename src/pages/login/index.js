import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators'
import { Redirect } from 'react-router-dom';//路由包
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends Component {
  render(){
    const {isLogin} = this.props
    if (isLogin==='0') {
      return (
        <LoginWrapper>
          <LoginBox>
            { /*这里ref获取不了value，innerRef由styleComponent提供 */ }
            <Input placeholder="账号" innerRef={(input)=>{this.account = input}}></Input>
            <Input placeholder="密码" type="password" innerRef={(input)=>{this.password = input}}></Input>
            <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'></Redirect>
    }
  }
}


const mapState = (state)=>({
  isLogin:state.getIn(['login','isLogin'])
})

const mapDispatch = (dispatch)=>({
  login(accountElem,passwordElem){
    // console.log(accountElem.value, passwordElem.value);
    if(accountElem.value===''||passwordElem.value===''){
      alert('请先填写账户和密码！')
      return
    }
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login)