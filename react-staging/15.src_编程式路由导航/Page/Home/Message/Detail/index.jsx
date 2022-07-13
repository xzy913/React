import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const Content =[
        {id:'1',content:'ha'},
        {id:'2',content:'wa'},
        {id:'3',content:'fa'},
    ]
    // 接收params参数
    const {id,title} = this.props.match.params
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
