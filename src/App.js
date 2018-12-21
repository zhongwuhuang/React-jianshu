import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';//路由包
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import store from './store'

class App extends Component {
  render() {
    return (
      // prpvider作用是把store提供给了他的内部所有组件
      <Provider store={store}>
        {/* 表示这里头的内容使用路由 */}
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route
              path='/'
              exact //意思是只有路径完全相等的时候才显示
              // render={()=><div>home</div>}
              component={Home}
              >
            </Route>
            <Route
              path='/login'
              exact //意思是只有路径完全相等的时候才显示
              // render={()=><div>home</div>}
              component={Login}
              >
            </Route>
            <Route
              path='/detail/:id'
              exact
              // render={()=><div>detail</div>}
              component={Detail}
            >
            </Route>
            <Route
              path='/write'
              exact
              // render={()=><div>detail</div>}
              component={Write}
            >
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
