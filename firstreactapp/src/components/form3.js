import React from "react";

export default class Form3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            uid:"",
            
            pwd:"",
            errors:{
                uiderror:"",
                pwderror:""
            },
            uidvalid:false,
            pwdvalid:false,
            formvalid:false
            
        }
    }
    handleInput=(ev)=>{
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;

        const nm = ev.target.name;
        const val = ev.target.value;
        let errors = this.state.errors;
        let uidflag = this.state.uidvalid;
        let pwdflag = this.state.pwdvalid;
        switch(nm)
        {
            case 'uid':
                if( !emailregexp.test(val) )
                {
                    errors.uiderror = "mail is invalid";
                    uidflag = false;
                }    
                else
                {
                    errors.uiderror = "";
                    uidflag=true;
                }    
                break;
            case 'pwd':
                if(val.length < 5)
                {
                    errors.pwderror = "Pwd too short";
                    pwdflag = false;
                }
                else
                {
                    errors.pwderror ="";
                    pwdflag= true;

                }
                break;    
        }
    
        this.setState({errors,[nm]: val,uidvalid: uidflag, pwdvalid: pwdflag} , ()=>{ this.setState({formvalid: this.state.uidvalid && this.state.pwdvalid})});
    }
   
   
    render(){
        return(
            <div className="container">
                <h1>LOGIN FORM</h1>
                  <form>
                  Enter Email Id : 
                    <input type="text" name="uid" value={this.state.uid}
                    onChange={this.handleInput} /> <br/>
                    Enter pwd : 
                    <input type="password" name="pwd" value={this.state.pwd}
                    onChange={this.handleInput} /> <br/>
                     
                      <input type="submit" value="SUBMIT"  disabled={!this.state.formvalid}/> 

                  
                  </form>
                  {this.state.errors.uiderror} <br/>
                {this.state.errors.pwderror}
                 
            </div>
        )
    }
}