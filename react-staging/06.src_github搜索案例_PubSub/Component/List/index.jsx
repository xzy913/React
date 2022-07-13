import React, { Component } from 'react'
import PubSub from 'pubsub-js' 
import './index.css'

export default class List extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }
  componentDidMount(){
   this.token= PubSub.subscribe("getSate",(_,stateObj)=>{
      console.log(stateObj) 
      this.setState(stateObj)

    }) 
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst?<h1>欢迎使用</h1>:
          isLoading?'Loading...':
          err?<h1 style={{color:'red'}}>{err}</h1>:
          users.map(
            (userObj) => {
              return (
                <div key={userObj.id} className="card">
                  <a rel='noreferrer' href={userObj.html_url} target="_blank">
                    <img alt='head_portrait' src={userObj.avatar_url} style={{ width: '100px' }} />
                  </a>
                  <p className="card-text">{userObj.login}</p>
                </div>  
                )
              }
            )

          }
      </div>
    )
  }
}
