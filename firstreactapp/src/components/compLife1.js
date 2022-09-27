import React from "react";

export default class Msge extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            msg:"hello"
        }
        
    }
    static getDerivedStateFromProps=()=>{
        return {msg:"modified msg"} 
    } 
    render(){
        return(
            <div>{this.state.msg}</div>
        )
    }

}