import React, { Component } from 'react'
import axios from 'axios';
import PubSub from 'pubsub-js' 

export default class Search extends Component {
  handelSearch=()=>{
    //获取用户的输入
    const {Keyword:{value}} = this
    console.log(value);
    //搜索前判断是否是第一次打开网页
    PubSub.publish("getSate",{isFirst:false,isLoading:true}) 
    // this.props.updataState({isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      (response)=>{
        console.log('获取成功',response.data);
        // this.props.updataState({isLoading:false,users:response.data.items})
        PubSub.publish("getSate",{isLoading:false,users:response.data.items}) 
      }
    ).catch(
      (error)=>{
        console.log('获取失败',error);
        // 请求失败后返回失败的原因
        // this.props.updataState({isLoading:false,err:error.message})
        PubSub.publish("getSate",{isLoading:false,err:error.message}) 
      }
    )
  }
  render() {
    return (
      <div className='container'>
         <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input ref={c=>this.Keyword=c} type="text" placeholder="enter the name you search"/>&nbsp;
        <button onClick={this.handelSearch}>Search</button>
      </div>
    </section>
      </div>
    )
  }
}
