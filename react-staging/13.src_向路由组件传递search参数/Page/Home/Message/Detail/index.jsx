import React, { Component } from 'react'
import QueryString from 'query-string'

export default class Detail extends Component {
  render() {
    const Content =[
        {id:'1',content:'ha'},
        {id:'2',content:'wa'},
        {id:'3',content:'fa'},
    ]
    // 接收search参数,需要借助querystring解析
    console.log(this.props.location);
    const {id,title} = QueryString.parse(this.props.location.search)
    const findContent =Content.find((contentObj)=>{
        return contentObj.id===id
        })
    return (
      <div>
        <p>ID:{id}</p>
        <p>TITLE:{title} </p>
        <p> CONTENT:{findContent.content}</p>
      </div>
    )
  }
}
