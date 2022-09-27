import React from "react";

export class GetStudents extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            Student: []
        }
    }

    componentDidMount = () =>{
        fetch("http://localhost:8080/allstud")
        .then(resp => resp.json())
        .then(data => {this.setState({Student: data});
                       alert(this.state.Student.length)});
    }

    render(){
        return (
            <div>
                <h2> Student List </h2>
                <table className="table table-bordered table-striped">
                    {
                        this.state.Student.map(
                            obj=>{
                                return(
                                    <tr>
                                        <td>{obj.sid}</td>
                                        <td>{obj.sname}</td>
                                        <td>{obj.city}</td>
                                        <td>{obj.bdate}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </div>
        )
    }

}