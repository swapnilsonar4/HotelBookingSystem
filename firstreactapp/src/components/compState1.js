import React from "react";
class Msg extends React.Component
{
    constructor(props)
    {
            super(props)
            this.state={
                msg:"welcome"
            };
            this.Changemsg=this.Changemsg.bind(this);
    }
    Changemsg(){
        this.setState({msg:"hello"})
    }


    render(){
        return(<div>
            <p>{this.state.msg}</p>
            <button onClick={this.Changemsg}>change msg</button>
            </div>

        )
    }

}
export default Msg