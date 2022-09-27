import React from "react";
class Array extends React.Component
{
   
    render(){
        const a=['one','two','three'];
        return(
            <div>
                <ul>
                    {a.map(a =>(
                        <li>{a}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Array