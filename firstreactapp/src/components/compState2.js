import React from "react";
class Msg2 extends React.Component
{
    constructor(props)
    {
            super(props)
            this.state={
                color:"red"
            };
           
    }
 

    render(){
        return(<div>
             <p onClick={()=>{this.setState({color:"blue"})}} style={{color:this.state.color}}>content of paragraph</p>
           
            </div>

        )
    }

}
export default Msg2