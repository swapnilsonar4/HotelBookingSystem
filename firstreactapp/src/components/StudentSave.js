import React from "react";

export class StudentSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sname: "",
            city: "",
            bdate: "",
            percentage: "",
            st: {},
            success: false
        }
    }


    handleChange = (e) => {
        let nm = e.target.name;
        let val = e.target.value;
        this.setState({ [nm]: val });
    }

    submitReq = (e) => {
        e.preventDefault();
        //console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sname: this.state.sname,
                percentage: this.state.percentage,
                city: this.state.city,
                bdate: this.state.bdate
            })
        };

        fetch("http://localhost:8080/savestud", reqData)
            .then(resp => resp.json())
            .then(data => this.setState({ st: data, success: true }));

    }

    render() {
        return (
            <div>
                <h2> Student Entry </h2>
                <form onSubmit={this.submitReq}>
                    Enter name : <input type="text" name="sname"
                        onChange={this.handleChange} /> <br />
                    Enter city : <input type="text" name="city"
                        onChange={this.handleChange} /> <br />
                    Enter percentage : <input type="number" name="percentage"
                        onChange={this.handleChange} /> <br />
                    Select bdate : <input type="date" name="bdate"
                        onChange={this.handleChange} /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <p style={{ display: this.state.success ? 'block' : 'none' }}> Student with id as {this.state.st.sid} is saved successfully</p>
            </div>
        )
    }
}