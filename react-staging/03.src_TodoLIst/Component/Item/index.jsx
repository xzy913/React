import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state={
    mouse:false
  }
  Mouse=(flag)=>{
    return( ()=>{
      // console.log(flag);
      this.setState({
        mouse:flag
      })
    }
    )
  }
  changeTodo=(id)=>{
    return (
      (e)=>{
        this.props.changeTodo(id,e.target.checked)
      }
    )
  }
  deleteTodo=(id)=>{
    if(window.confirm('确定删除吗')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id,name,done} = this.props
    const {mouse} =this.state
    // console.log('1',mouse);
    return (
      <div className='Item_con' style={{backgroundColor:mouse?'gray':'white'}} onMouseEnter={this.Mouse(true)} onMouseLeave={this.Mouse(false)}>
        <input type="checkbox" checked={done} onChange={this.changeTodo(id)} /> 
        <li className='li'>{name}</li>
        <button onClick={()=>this.deleteTodo(id)} style={{display:mouse?'block':'none'}}>删除</button>
      </div>
    )
  }
}
