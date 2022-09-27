import React from "react";

export default class Getcomp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(data => this.setState({ users: data }))
    }

    render() {
        return (
            <div className="container">
                <h3> User Details </h3>
                <table className="table table-bordered table-hover">
                    {
                        this.state.users.map((v) => {
                            return (
                                <tr>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.username}</td>
                                    <td>{v.email}</td>
                                    <td>{v.address.zipcode}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}