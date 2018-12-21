import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position:fixed;
  top:0;
  z-index:1000;
  width:100%;
  background:#fff;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`

// export const Logo = styled.a.attrs({
//   href:'/'
// })`
export const Logo = styled.div`
  position:absolute;
  top:0;
  left:30px;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  height:100%;
`
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  height:100%;
  float:left;
  position:relative;
  .zoom{
    position:absolute;
    right:6px;
    top:12px;
    width:30px;
    line-height:30px;
    border-radius:50%;
    text-align:center;
    color:#969696;
    font-size:26px;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  width:200px;
  padding:14px 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  font-size:14px;
  &:before{
    position:absolute;
    content: "";
    left: 27px;
    top: -7px;
    box-shadow: -2px -2px 6px rgba(0,0,0,.2);
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    z-index: 10000;
  }
`
export const SearchInfoTitle = styled.div`
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  font-size:13px;
  float:right;
  cursor:pointer;
  &:hover{
    color:#333;
  }
  .icon-spinner-{
    display:inline-block;
    font-size:10px;
    margin-right:4px;
    transition:all 0.3s ease-in;
    transform-origin:center center;
  }
`
export const SearchInfoItem = styled.a`
  display: inline-block;
  cursor:pointer;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 10px 10px 0 0;
  &:hover{
    color:#676767;
    border: 1px solid #999;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  box-sizing:border-box;
  width:200px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  transform: translate(0px,8px);
  padding: 0 35px 0 20px;
  border: 1px solid #eee;
  background: #eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:280px;
  }
  &.slide-enter{
    transition:all 0.3s ease-in;
  }
  &.slide-enter-active{
    width:280px;
  }
  &.slide-exit{
    transition:all 0.3s ease-in;
  }
  &.slide-exit-active{
    width:200px;
  }  
`
export const Addition = styled.div`
  position:absolute;
  height:56px;
  top:0;
  right:30px;
`
export const Button = styled.div`
  cursor:pointer;
  float:right;
  padding:0 20px;
  margin-right:20px;
  line-height:38px;
  border-radius:19px;
  transform: translateY(8px);
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`
