import React from 'react'
import './shared.css'

class ErrorTess extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        this.state = {
            show: false,
            // isToggleOn: true
        }
    }
    // handleClick() {
    //     this.setState(state => ({
    //       isToggleOn: !state.isToggleOn
    //     }));
    //   }
    cancel = (event) => {
        console.log(event.target.id)
       this.setState({ show: !this.state.show });
        console.log(!this.state.show)
        console.log("Button clicked...")
    }

    render () {
    return (
    <div id="err">
        <h1>
            Oops, something went wrong!
             Try going back or refreshing the page.
        </h1>
        <button id='canc' onClick={this.cancel} >Close</button>
       
        <button id='go_back' onClick={() => window.history.back()}>
            Go back
        </button>
    </div>
    )
   }
}


export default ErrorTess