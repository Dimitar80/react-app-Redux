import React from 'react'
import './style.css'


class ExtractUser extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            // show: false
        }
    }

    render () {
        return (
            <React.Fragment>
                <div id="newproduct">
                    <div className="box-container" id="add-new-product-container">
                        <form >
                            <p>
                                <label className="text-field-label">User ID</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.id}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Name</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.name}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Username</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.username}></input>
                            </p>
                            <p>
                                <label className="text-field-label">E-mail</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.email}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Street address</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.street}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Suite</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.suite}></input>
                            </p>
                        </form>
                        <div id='edsav'>
                            <button className="primary-edit-btn" id="s-btn" >
                            Edit
                            </button>

                            <button className="primary-save-btn" id="s-btn" >
                            Save/Send
                            </button>
                        </div>
                        <div>
                            <button className="primary-del-btn" id="del-btn" 
                            // onClick={() => this.props.del(this.props.id)} 
                            onClick={this.props.delete}>
                            Delete 
                            </button>

                            <button className="primary-close-btn" id="cl-btn"  
                            onClick={this.props.close}>
                            Close
                            </button>
                        </div>
                    </div>
                    </div>
                    </React.Fragment>
           
        )
    }
}

export default ExtractUser