import React from 'react'
import './style.css'
import './shared.css'

class AddNewUser extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            // show: false,
        
        }
    }

    render () {
        return (
            <React.Fragment>
                <div id="newproduct">
                    <div className="addNu-container" id="add-new-product-container">
                        <form >
                        <div className='addTitle'>Add new user</div>
                            <p>
                                <input id ='name' type='text' className="text-field-input" placeholder='name' />
                            </p>
                            <p>
                                <input id ='usename' type='text' className="text-field-input" placeholder='username' />
                            </p>
                            <p>
                                <input type='email' className="text-field-input" placeholder='email' />
                            </p>
                            <p>
                                <input type='streetAddress' className="text-field-input" placeholder='streetAddress'/>
                            </p>
            
                        </form>
                        <div id='btns'>
                        <button id='save' className='saveBtn' onClick={() => this.saveUser()}>Save</button>
                        <button id='close' className='closeBtn' onClick={this.props.opcl}> Close </button>
                        </div>
                     </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddNewUser
