// 创建外壳组件
import React from 'react'
import Header from './Component/Header/index'
import List from './Component/List/index'
import Footer from './Component/Footer/index'
class App extends React.Component{
    state={
        todos:[
            {id:'1',name:'吃饭',done:true},
            {id:'2',name:'睡觉',done:true},
            {id:'3',name:'打代码',done:false}
        ]
    }
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({
            todos:newTodos
        })
    }
    changeTodo=(id,done)=>{
        const {todos}=this.state
        const newTodos = todos.map(
            (todoObj)=>{
                if(todoObj.id===id){
                    return(
                        {...todoObj,done}
                    )
                }
                else{
                    return todoObj
                }
            }
        )
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        const {todos}=this.state
        const newTodos = todos.filter(
            (todoObj)=>{
                return todoObj.id!=id
            }
        )
        this.setState({todos:newTodos})
    }
    checkAlltodo=(done)=>{
        const {todos}=this.state
        const newTodos=todos.map(
            (todoObj)=>{
                return {...todoObj,done}
            }
        )
        this.setState({todos:newTodos})
    }
    deleteAlltodo=()=>{
        const {todos}=this.state
        const newTodos = todos.filter(
            (todoObj)=>{
                return !todoObj.done
            }
        )
        this.setState({todos:newTodos})
    }
    render(){
        const {todos} =this.state
        return (
            <div id='to_container'>
                <div id='to_kuang'>
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />   
                    <Footer todos={todos} deleteAlltodo={this.deleteAlltodo} checkAlltodo={this.checkAlltodo} />            
                </div>
            </div>
        )
    }
}
// 暴露App组件
export default App