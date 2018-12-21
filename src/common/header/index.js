import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import  * as actionCreators from './store/actionCreators'
import * as loginActionCreators from '../../pages/login/store/actionCreators'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';//路由包
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'

class Header extends Component {
  getListArea () {
    const { focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage } = this.props
    const pageList = []
    const jsList = list.toJS() //immutable类型数组不支持中括号语法要变成常规数组
    if (jsList.length){
      for (let index = (page-1)*10; index < page*10; index++) {
        pageList.push(
          <SearchInfoItem key={index}>{jsList[index]}</SearchInfoItem>
        )
      }
    }
    if(focused||mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
            >
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont icon-spinner-"></i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    }else{
      return null
    }
  }

  render() {
    const {focused,handleInputFocus,handleInputBlur,list,isLogin,logout} = this.props
    console.log(isLogin);
    
    return (
      <HeaderWrapper className="Header">
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            isLogin==='1'?
            <NavItem onClick={logout} className="right">退出</NavItem>:
            <Link to='/login'>
              <NavItem className="right">登录</NavItem>
            </Link>
          }
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused?'focused':''}
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i 
              className={focused?'focused iconfont zoom icon-fangdajing':'iconfont zoom icon-fangdajing'}
            >
            </i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to='/write'>
              <Button className="writting">
                <i className="iconfont icon--quill"></i> 写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

// 把store仓库里头的数据映射到组件props中
const mapStateToProps = (state)=>{
  return {
    focused:state.get('header11').get('focused'),
    list:state.getIn(['header11','list']),
    page:state.getIn(['header11','page']),
    totalPage:state.getIn(['header11','totalPage']),
    mouseIn:state.getIn(['header11','mouseIn']),
    isLogin:state.getIn(['login','isLogin'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      if(list.size===0){ //如果没有数据就请求
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if (originAngle){
        originAngle = parseInt(originAngle,10)
      }else{
        originAngle = 0
      }
      console.log(typeof originAngle);
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);