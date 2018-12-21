import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TopicWrapper,TopicItem} from '../style'

class Topic extends Component {
  render(){
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=>{
            return (
              // item是imutable对象，要通过get获取
              <TopicItem key={item.get('id')}>
                <img className="topicitem_img" src={item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state)=>({
  list:state.getIn(['home','topicList'])
})

export default connect(mapState, null)(Topic)