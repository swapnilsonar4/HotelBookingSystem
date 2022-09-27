import React from "react";

export default class Form1 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            uid:"",
            pwd:""
        };
        
        
    }
    handleinput=(ev)=>{
        const type = ev.target.type;
        const nm = ev.target.name;
        let val;
        if(type === "checkbox")
            val = ev.target.checked;
        else    
            val = ev.target.value;

         this.setState({[nm]: val});        

    }
    submitForm=(ev)=>{
        ev.preventDefault();
        alert("Form is getting submiitted.......");
        console.log("Welcome"+this.state.uid);
        
        
    }


    render(){
        return(
            <div className="container">
                <form>
                    enter uid:
                    <input type="text" name="uid" value={this.state.uid} onChange={this.handleinput}/><br/>
                    enter password:
                    <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleinput}/>
                    <input type="submit" value="SUBMIT" onClick={this.submitForm} /> 

                </form>
                
                
            </div>
        )
    }
}