import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail/index'

export default class Message extends Component {
    state = {
        messageArr: [
            { id:'1', title: '消息一' },
            { id:'2', title: '消息二' },
            { id:'3', title: '消息三' }
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* <a href="/message1">{msgObj.title}</a>&nbsp;&nbsp; */}
                                    {/* 编写路由链接 */}
                                    {/* 向路由组件传递search参数 */}
                                    <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title} `} title={msgObj.title} >{msgObj.title}</Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
                <hr/>
                {/* <Detail/> */}
                {/* search参数无需声明接收 */}
                <Route path='/home/message/detail' component={Detail} ></Route>
            </div>
        )
    }
}
