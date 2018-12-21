import styled from 'styled-components'

export const HomeWrapper = styled.div`
  box-sizing:border-box;
  padding:30px 15px 0;
  overflow:hidden;
  width: 960px;
  margin: 0 auto;
`

// 首页左侧
export const HomeLeft = styled.div`
  float:left;
  width: 625px;
  .banner_img{
    width:100%;
    height:270px;
    border-radius:6px;
  }
`
export const TopicWrapper = styled.div `
  overflow:hidden;
  border-bottom:1px solid #dcdcdc;
  padding-bottom: 10px;
`
export const TopicItem = styled.div `
  float:left;
  display: inline-block;
  margin: 0 18px 18px 0;
  height:32px;
  line-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  font-size:14px;
  padding-right:8px;
  .topicitem_img{
    height:100%;
    display:block;
    margin-right:8px;
    float:left;
  }
`
export const ListItem = styled.div `
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  img{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:4px;
  }
`
export const ListInfo = styled.div `
  width:475px;
  float:left;
  h3{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  p{
    text-align:justify;
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`
export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  display: block;
  cursor:pointer;
`

// 首页右侧
export const HomeRight = styled.div`
  float:right;
  width: 280px;
`
export const RecommendWrapper = styled.div`
  width: 280px;
  margin-top: -4px;
`
export const RecommendItem = styled.div `
  width: 280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});
  background-size: contain;
  margin-bottom: 5px;
`
export const WriterWrapper = styled.div `
`

export const BackTop = styled.div `
  position: fixed;
  height:60px;
  line-height:60px;
  width:60px;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  border:1px solid #dcdcdc;
  text-align:center;
`