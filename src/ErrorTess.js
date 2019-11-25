import React from 'react'
import './shared.css'

class ErrorTess extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        this.state = {
            show: false,
            // isActive: true
            // error: null
        }
    }

    // hideAlert() {
    //     this.setState({
    //       isActive: false,
    //     });
    //   }
    
    // CloseBtn = (event) => {
    //     console.log(event.target.id)
    //    this.setState({ show: !this.state.show });
    //     // this.setState({ error: null });
    //     // console.log(!this.state.show)
    //     console.log("Button clicked...")
    //     // alert('Hello')
    // }

    // setState({ error: null })

    render () {
    return (
    <div id="err">
        <h1>
            Oops, something went wrong! <br />
            Try going back or refreshing the page.
        </h1>
        <button id='canc' /*onClick={() => setState({ error: null})}*/ onClick={this.props.clBtn} >
             Close 
        </button>
        <button id='go_back' onClick={() => window.history.back()}>
            Go back
        </button>
    </div>
    )
   }
}


export default ErrorTess



// import React, { Component } from 'react';

// class Alert extends Component {

//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       isActive: true,
//     }
//   }

//   hideAlert() {
//     this.setState({
//       isActive: false,
//     });
//   }

//   render() {
//     if (this.state.isActive) {
//       return (
//           <div
//             className="alert alert-warning alert-dismissible"
//             role="alert"
//           >
//             <button
//               type="button"
//               className="close"
//               data-dismiss="alert"
//               aria-label="Close"
//               onClick={() => this.hideAlert()}
//             >
//               <span aria-hidden="true">&times;</span>
//             </button>
//             {this.props.text}
//           </div>
//       );
//     }
//     return <div/>
//   }
// }

// export default Alert;