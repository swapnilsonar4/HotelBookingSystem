import React from "react";

export default class GetContacts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contact: []
        }
    }

    componentDidMount=()=>{
        //dummy url
        fetch("http://localhost:8080/allcons")
        .then(r => r.json())
        .then(d => this.setState({contact: d}))
    }

    render(){
        return (
            <div className="container">
                <h3> Contacts </h3>
                <table className="table table-bordered table-hover">
                    {
                        this.state.contact.map((v)=>{
                            return(
                                <tr>
                                   <td>{v.cid}</td> 
                                   <td>{v.fname}</td> 
                                   <td>{v.lname}</td> 
                                   <td>{v.email}</td> 
                                   <td>{v.contact}</td> 
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }

}