import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';//路由包

class Write extends Component {
  render(){
    const {isLogin} = this.props
    if (isLogin) {
      return (
        <div>
          开始写文章
        </div>
      )
    }else{
      return <Redirect to='/login'></Redirect>
    }
  }
}

const mapState = (state)=>({
  isLogin:state.getIn(['login','isLogin'])
})

export default connect(mapState, null)(Write)