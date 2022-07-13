import React, { Component } from 'react'
import {nanoid} from 'nanoid'
export default class Header extends Component {
  Enter=(e)=>{
      if(e.key!='Enter') return
      if(e.target.value.trim()===''){
        alert('不能为空')
      }
      else{const todoObj = {id:nanoid(),name:e.target.value,done:false}
      this.props.addTodo(todoObj)
      e.target.value =''}
  }
  render() {
    return (
      <div>
        <input onKeyUp={this.Enter} type="text" placeholder='请输入任务名称' />
      </div>
    )
  }
}
