import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
      <div className="row">
        {
          isFirst?<h1>欢迎使用</h1>:
          isLoading?'isLoading...':
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
