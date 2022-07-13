// 创建外壳组件
import React from 'react'
import Hello from './component/Hello/Index'
class App extends React.Component{
    render(){
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}
// 暴露App组件
export default App