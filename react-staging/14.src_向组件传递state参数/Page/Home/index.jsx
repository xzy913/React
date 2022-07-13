import React, { Component } from 'react'
import { Route,Redirect} from 'react-router-dom'
import Message from './Message/index'
import News from './News/index'
import MyNavLink from '../../Components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            {/* <a class="list-group-item" href="./home-news.html">News</a> */}
            {/* 编写路由链接 */}
            <MyNavLink to='/home/news' title='News'>News</MyNavLink>
          </li>
          <li>
            {/* <a class="list-group-item " href="./home-message.html">Message</a> */}
            <MyNavLink to='/home/message' title='Message'>Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Route path='/home/news' component={News}/>
        <Route path='/home/message' component={Message}/>
        <Redirect to='/home' />
      </div>

    )
  }
}
