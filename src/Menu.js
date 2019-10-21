import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './shared.css'

const Menu = () => {
    return (
    <div id='menu'>
        <ul>
            <li>
                <Link to='/' id='l'>Home</Link>
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
    )
}

export default Menu