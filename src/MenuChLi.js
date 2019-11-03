import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './shared.css'
import './style.css'

const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

 class MenuChLi extends React.Component {
    constructor(){
           super();
  
           this.state = {
                active: null,
                
           }
      }
      

      toggle =(position) => {
        if (this.state.active === position) {
          this.setState({active : null})
        } else {
          this.setState({active : position})
        }
      }
      
      myColor = (position) => {
        if (this.state.active === position) {
          return 'orange';
        }
        return "";
      }
      
  
      
  
      render(){
        

          return (

            <div id='menu'>
        <ul>
            <li>
                <Link to='/' style={{color: this.myColor(0)}} onClick={() => {this.toggle(0)}} id='l' >
                    Home
                    </Link>
            </li>
            <li>
                <Link to='/about' style={{color: this.myColor(1)}} onClick={() => {this.toggle(1)}} id='l'>
                    About us
                    </Link>
            </li>
            <li>
                <Link to='/contact' style={{color: this.myColor(2)}} onClick={() => {this.toggle(2)}} id='l'>
                    Contact us
                    </Link>
            </li>
            <li>
                <Link to='/login' style={{color: this.myColor(3)}} onClick={() => {this.toggle(3)}} id='l'>
                    Log in
                    </Link>
            </li>
            <li>
                <Link to='/user' style={{color: this.myColor(4)}} onClick={() => {this.toggle(4)}} id='l'>
                    User
                    </Link>
            </li>
            <li>
                <Link to='/weather' style={{color: this.myColor(5)}} onClick={() => {this.toggle(5)}} id='l'>
                    Weather Forecast
                    </Link>
            </li>
        </ul>
    </div>
            //    <div>
            //        <button className={btn_class}
            //                onClick={this.changeColor.bind(this)}>
            //                  Button
            //         </button>
            //    </div>
          )
      }
  }

  export default MenuChLi
  
