import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Page/Home/index'
import About from './Page/About/index'
import MyNavLink from './Components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 在原生中使用a标签实现页面跳转 */}
            {/* <a class="list-group-item" href="./about.html">About</a>
            <a class="list-group-item active" href="./home.html">Home</a> */}
            {/* 在React中靠路由链接实现切换组件---编写路由链接 */}
                <MyNavLink to='/demo/about' title='About'>About</MyNavLink>
                <MyNavLink to='/demo/home' title='Home'>Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* <h3>我是xxx的内容</h3> */}
              {/* 注册路由 */}
              {/* 使用Switch封装，当匹配到这个路径之后就不会再往下匹配相同的路径了 */}
              <Switch>
                <Route path='/demo/about' component={About}/>
                <Route path='/demo/home' component={Home}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
