// 创建外壳组件
import React from 'react'
import axios from 'axios'
class App extends React.Component{
    getInf1=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            (response)=>{
                console.log('收到的数据为:',response.data);
            }
        ).catch(
            (error)=>{
                console.log('请求失败，原因是:',error);
            }
        )
    }
    getInf2=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            (response)=>{
                console.log('收到的数据为:',response.data);
            }
        ).catch(
            (error)=>{
                console.log('请求失败，原因是:',error);
            }
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.getInf1}>点击获取学生信息</button>
                <button onClick={this.getInf2}>点击获取汽车信息</button>
            </div>
        )
    }
}
// 暴露App组件
export default App