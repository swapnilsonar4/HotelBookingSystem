import React from "react";

export default class Msge2 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            Color:"red"
        }
        
    }
   getSnapshotBeforeUpdate=(prevP,prevS)=>
   {
       console.log("before update:"+prevS.Color)
       return null;

   }
   componentDidUpdate=(prevP,prevS)=>
   {
       console.log("after update:"+this.state.Color)
   }
    render(){
        return(
            <div>
                <p>Color:{this.state.Color}</p>
                <button onClick={()=>{this.setState({Color:"blue"})}}>Change</button>
            </div>
        )
    }

}