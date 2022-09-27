import React from "react";
import './mystyle.css'
import './mystyle1.css'
export default class Styl extends React.Component
{
    

    render(){
        return(
            <div>
                <p style={{color:"yellow",backgroundColor:"blue"}}>
                    this is inline change
                </p>
                <p className="mymsg">
                    this is external change
                </p>
                <p className="cssModule">
                    this is object
                </p>
            </div>
        )
    }
}