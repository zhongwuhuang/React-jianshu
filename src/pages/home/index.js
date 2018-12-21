import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import * as actionCreators from './store/actionCreators'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  hangdleScrollTop(){
    window.scrollTo(0,0)
  }
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <a style={{marginBottom:35,display:"block",height:270}} href="https://www.jianshu.com/p/38edc2dab181?utm_medium=index-banner&utm_source=desktop">
            <img className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4494/9d9f6188aff3634c9fb99ec0f68299d509faae48.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          </a>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll?<BackTop onClick={this.hangdleScrollTop}>顶部</BackTop>:null}
      </HomeWrapper>
    )
  }
  
  // 组件挂载完毕执行
  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch)=>({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow(e){
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop>200){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)