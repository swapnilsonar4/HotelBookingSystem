import React from "react";
class Emp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            empid:101,
            name:'sanjay',
            salary:10000,
        };
    }
    render(){
        return(
            <div>
                <table border="1">
                    <tr>
                        <td>{this.state.empid}</td>
                        <td>{this.state.name}</td>
                        <td>{this.state.salary}</td>
                    </tr>
                </table>

            </div>
        )

        
    }
}
export default Emp