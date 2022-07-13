import React, { Component } from 'react'
import Search from './Component/Search/index'
import List from './Component/List/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <List/>
      </div>
    )
  }
}
