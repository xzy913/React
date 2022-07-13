import React, { Component } from 'react'
import Search from './Component/Search/index'
import List from './Component/List/index'

export default class App extends Component {
  state={
    users:[],//user初始值为数组
    isFirst:true,//是否是第一次打开页面
    isLoading:true,//是否处于加载中
    err:'' //储存错误信息
  }
  updataState=(dataObj)=>{
    this.setState(dataObj)
  }
  render() {
    return (
      <div>
        <Search updataState={this.updataState}/>
        <List {...this.state} />
      </div>
    )
  }
}
