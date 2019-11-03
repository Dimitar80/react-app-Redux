import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './shared.css'
import './style.css'

 class TestMenu extends React.Component {
    constructor(){
           super();
  
           this.state = {
                white: true
           }
      }
  
      changeColor(){
          this.setState({white: !this.state.white})
      }
  
      render(){
          let link_class = this.state.white ? "white" : "orange";
  
          return (

            <div id='menu'>
        <ul>
            <li>
                <Link to='/' className={link_class} onClick={this.changeColor.bind(this)} /*id='l'*/ >Home</Link>
            </li>
            <li>
                <Link to='/about' id='l'>About us</Link>
            </li>
            <li>
                <Link to='/contact' id='l'>Contact us</Link>
            </li>
            <li>
                <Link to='/login' id='l'>Log in</Link>
            </li>
            <li>
                <Link to='/user' id='l'>User</Link>
            </li>
            <li>
                <Link to='/weather' id='l'>Weather Forecast</Link>
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

  export default TestMenu
  
