import React from 'react'
import './style.css'


class ExtractUser extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            show: false
        }
    }


    // showOrHide = (event) => {
    //     console.log(event.target.id)
    //     /* menuvanje na state so setState() metoda
    //     otkako state-ot kje se smeni,
    //     komponentata si go vika svojot render metod odnovo
    //     (ASINHRONA E, PAZETE! noviot state moze da go procitate
    //         samo vo render i so callback) */
    //     this.setState({ show: !this.state.show });
    //     console.log("Button clicked...")
    // }

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
                            <button className="primary-button long" id="create-btn" >
                            Save
                            </button>
                            <button className="primary-button long" id="create-btn" 
                            onClick={() => this.props.del(this.props.id)}>
                            Delete
                            </button>
                            <button className="primary-button long" id="create-btn"  onClick={this.props.ex}>
                            Close
                            </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ExtractUser