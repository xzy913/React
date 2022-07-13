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
    replaceShow(id,title){
        // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
        // replace跳转+携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转+携带search
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace跳转+携带state
        // this.props.history.replace(`/home/message/detail`,{id,title})
    }
    pushShow(id,title){
        // 编写一段代码，让其实现跳转到Detail组件，且为push跳转
         // push跳转+携带params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转+携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push跳转+携带state
        // this.props.history.push(`/home/message/detail`,{id,title})
    }
    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    go=()=>{
        this.props.history.go(2)
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
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title} `} title={msgObj.title} >{msgObj.title}</Link>
                                    &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)} >push查看</button>
                                    &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)} >replace查看</button>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
                <hr/>
                {/* <Detail/> */}
                {/* 声明接收 */}
                <Route path='/home/message/detail/:id/:title' component={Detail} ></Route>

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go} >前进几步</button>
            </div>
        )
    }
}
