import styled from 'styled-components'

export const LoginWrapper = styled.div `
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:56px;
  background: #f1f1f1;
`
export const LoginBox = styled.div `
  box-sizing: border-box;
  width: 400px;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
export const Input = styled.input `
  box-sizing: border-box;
  outline:none;
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
`
export const Button = styled.button `
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #187cb7;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
`