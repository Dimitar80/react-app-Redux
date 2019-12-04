import React from 'react'
import store from './redux/store'
import Alert from './Alert.js'
import { updateUser, deleteUser } from './redux/actions/updateUser'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            address: '',
            telnum: ''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if (inputValue.indexOf('@') <= 0) {
            console.log('imas greska u mejlo')
        }
        this.saveInput(event)
    }

    submit = () => {
        store.dispatch(updateUser(
            this.state.username,
            this.state.password,
            this.state.address,
            this.state.telnum
        ))
    }

    delete = () => {
        store.dispatch(deleteUser())
    }

    saveInput = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render () {
        return <React.Fragment>
            <div className='compHead'>
                    <h1>Login page - React/Redux test</h1>
                </div>
            <Alert />
            
            <input id='username'
                placeholder='Username'
                onChange={this.checkInput}
            />
            <input id='password'
                placeholder='Password' 
                onChange={this.saveInput}
            />
            < br />
            <input id='address'
                placeholder='Address' 
                onChange={this.saveInput}
            />
            <input id='telnum'
                placeholder='TelNum' 
                onChange={this.saveInput}
            />
            < br />< br />
            <button id='submit' onClick={this.submit}>
                Log In!
            </button>
            <button id='delete' onClick={this.delete}>
                Delete user
            </button>
        </React.Fragment>
    }
}

export default Login