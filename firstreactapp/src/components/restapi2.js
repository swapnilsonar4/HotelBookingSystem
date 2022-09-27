import React from "react";

export default class GetEmp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emp: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8081/emp")
            .then(resp => resp.json())
            .then(data => this.setState({ emp: data }))
    }

    render() {
        return (
            <div className="container">
                <h3> Emp Information </h3>
                <table className="table">
                    <tr>
                        <th> Emp ID  </th>
                        <th> Emp Name  </th>
                        <th> Salary  </th>
                        <th> Dept  </th>
                    </tr>
                    {
                        this.state.emp.map((v) => {
                            return (
                                <tr>
                                    <td>{v.EMPNO}</td>
                                    <td>{v.ENAME}</td>
                                    <td>{v.SAL}</td>
                                    <td>{v.DEPTNO}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}