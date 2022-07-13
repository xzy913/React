import React, { Component } from 'react'
import Item from '../Item/index'
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
      changeTodo:PropTypes.func.isRequired,
      todos:PropTypes.array.isRequired
  }
  render() {
    const {todos,changeTodo,deleteTodo} =this.props
    return (
      <div>
        <ul>
          {
            todos.map((todo)=>{
                return <Item deleteTodo={deleteTodo} changeTodo={changeTodo} key={todo.id} {...todo} />
              })
          }
        </ul>
      </div>
    )
  }
}
