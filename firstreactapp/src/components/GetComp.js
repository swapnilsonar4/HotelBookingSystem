import React from "react";

export default class GetComp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(r => r.json())
        .then(d => this.setState({todos: d}))
    }

    render(){
        return (
            <div className="container">
                <h3> Todos </h3>
                <table className="table table-bordered table-hover">
                    {
                        this.state.todos.map((v)=>{
                            return(
                                <tr>
                                   <td>{v.id}</td> 
                                   <td>{v.title}</td> 
                                   <td>{v.completed.toString()}</td> 
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }

}