import React from "react";

export default class Form2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            emailid:"",
            city:"",
            gender:"",
            pwd:"",
            ch:false
        }
    }
    changeInpText=(event)=>{
        const en=event.target.name;
        const type=event.target.type;
        let val;
        if(type==="checkbox"){
             val=event.target.checked;
             
        }
        else
          val=event.target.value;
        
        this.setState({[en]:val})
         
    


    }
    dispMsg=(event)=>{
        event.preventDefault();
  
        if(this.state.ch===true)
        {
            console.log(this.state)
            
        }
        else
        console.log("Information can not shown here")
    
    

          }
   
    render(){
        return(
            <div>
              
                  <form>
                      Enter EmailID:
                      <input  type="email" name="emailid" value={this.state.emailid} onChange={this.changeInpText} ></input>
                      Enter City:
                      <input  type="text" name="city" value={this.state.city} onChange={this.changeInpText} ></input>
                      Select Gender:
                      <input type="radio" name="gender" value="male" onChange={this.changeInpText} />Male                     
                      <input  type="radio" name="gender" value="Female" onChange={this.changeInpText} />Female
                      <br/>
                      Enter Password:
                      <input  type="password" name="pwd" value={this.state.pwd} onChange={this.changeInpText} ></input>
                      <br/>
                      <input type="checkbox" name="ch" value={this.state.ch} onChange={this.changeInpText}/> I Agree
                      <br/>
                     
                      <input type="submit" value="SUBMIT"  onClick={this.dispMsg} /> 

                  
                  </form>
                
                 
            </div>
        )
    }
}