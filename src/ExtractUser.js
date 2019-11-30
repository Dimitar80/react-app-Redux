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
                            <button className="primary-save-btn" id="create-btn" >
                            <div className='txt' >Save/Send</div>
                            </button>
                            <button className="primary-del-btn" id="create-btn" 
                            // onClick={() => this.props.del(this.props.id)} 
                            onClick={this.props.del}>
                            <div className='txt' > Delete </div>
                            </button>
                            <button className="primary-close-btn" id="create-btn"  onClick={this.props.ex}>
                            Close
                            </button>
                    </div>
                    </div>
                    </React.Fragment>
           
        )
    }
}

export default ExtractUser