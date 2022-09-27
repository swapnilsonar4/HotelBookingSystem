import React from "react";
import propTypes from "prop-types";
function Fact(props)
{
    
    
        let n=props.num
        let num=props.num
        if(n==0)
        {
            return 1;
        }
        var f=1;
        while(n>=1)
        {
            
            f=f*n;
            n--;
        }
       
    
        return(
            <div><h1> factorial {num} is {f}</h1>
                 </div>
        )
    
   
}
Fact.defaultProps={
    num:4
}
export default Fact;