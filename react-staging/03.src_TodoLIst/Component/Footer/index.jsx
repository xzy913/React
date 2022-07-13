import React, { Component } from 'react'

export default class Footer extends Component {
    checkAll=(e)=>{
        this.props.checkAlltodo(e.target.checked)
    }
    deleteAll=()=>{
        this.props.deleteAlltodo()
    }
  render() {
    const {todos,checkAll}= this.props
    const doneCount =todos.reduce(
        (pre,todo)=>{
            return pre + (todo.done?1:0)
        },0
    )
    const total = todos.length
    return (
      <div>
        <input onChange={this.checkAll} checked={doneCount===total&&total!=0?true:false} type="checkbox" />已完成{doneCount}/全部{total}
        <button onClick={this.deleteAll}>清除已完成</button>
      </div>
    )
  }
}
