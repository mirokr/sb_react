import React, {Component} from 'react'


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:
            [
            {id:1,description:'Learn React',done:false,targetDate:new Date('2021/06/04')},
            {id:2,description:'Become an Expert at React',done:false,targetDate:new Date('2021/08/28')},
            {id:3,description:'Visit Australia',done:false,targetDate:new Date('2022/01/24')}
            ]
        }
    }


    render(){
        return (        
                <div>
                    <h1>List Todos</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                       
                                        <th>Description</th>
                                        <th>Is Completed</th>
                                        <th>Target Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map
                                    (
                                        todo=>
                                            <tr key={todo.id}>
                            
                                                <td>{todo.description}</td>
                                                <td>{todo.done.toString()}</td>
                                                <td>{todo.targetDate.toString()}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>)
    }
}

export default ListTodosComponent