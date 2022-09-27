import React from "react";
const cdate=new Date();
class Date1 extends React.Component
{
    render(){
        return (cdate.toDateString())
    }
}
export default Date1