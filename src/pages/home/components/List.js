import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem,ListInfo,LoadMore} from '../style'
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom';//路由包

class List extends Component {
  render(){
    const {list,getMoreList,page} = this.props
    return (
      <div>
        {
          list.map((item,index)=>{
            return (
              <Link key={index} to={'/detail/'+item.get('id')}>
                <ListItem>
                  <img src={item.get('imgUrl')} alt=""/>
                  <ListInfo>
                    <h3>{item.get('title')}</h3>
                    <p>
                      {item.get('desc')}
                    </p>
                  </ListInfo>
                </ListItem>              
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)