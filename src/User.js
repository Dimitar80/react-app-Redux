import React from 'react'
// import Extract from 'react';
import './style.css'
import './shared.css'

// function ExpandButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Expand
//       </button>
//     );
//   }
  
//   function CancelButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Cancel
//       </button>
//     );
//   }


//   var green = '#39D1B4';
//   var yellow = '#FFD712';

class User extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /* Initial state */
        this.state = {
            show: false,
            buttonText: "Expand",
            color : green
            // green : '#39D1B4',
            // yellow : '#FFD712'
            // isLoggedIn: false

        }
    }

       showOrHide = (event) => {
        console.log(event.target.id)
        /* menuvanje na state so setState() metoda
        otkako state-ot kje se smeni,
        komponentata si go vika svojot render metod odnovo
        (ASINHRONA E, PAZETE! noviot state moze da go procitate
            samo vo render i so callback) */
        this.setState({ show: !this.state.show });

        console.log("Button clicked...")
        let buttonText = this.state.buttonText === "Expand" ? "Cancel" : "Expand"
        this.setState({buttonText: buttonText});
        
        let newColor = this.state.color === green ? yellow : green
        this.setState({color: newColor});
    
    }
    // myPress = () => {
    //     this.setState({
    //       color: yellow
    //     });
    //   };
    // handleClick = () => {
    //     console.log("Button clicked...")
    //     let buttonText = this.state.buttonText == "Expand" ? "Cancel" : "Expand"
    //     this.setState({buttonText: buttonText})
    //   }

    // handleExpandClick() {
    //     this.setState({isLoggedIn: true});
    //   }
    
    // handleCancelClick() {
    //     this.setState({isLoggedIn: false});
    //   }

      

    render () {
        // const isLoggedIn = this.state.isLoggedIn;
        // let button;
    
        // if (isLoggedIn) {
        //   button = <CancelButton onClick={this.handleCancelClick} />;
        // } else {
        //   button = <ExpandButton onClick={this.handleExpandClick} />;
        // }
        return (
            <React.Fragment>
                
                    <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.username}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.address}</td>
                    <td>{this.props.suite}</td>
                    <td>
                        <button id='toggle' /*onClick={this.handleClick}*/ 
                        onClick={this.showOrHide} style={{backgroundColor:this.state.newColor}}>
                        {this.state.buttonText}
                        {/* {this.state.newColor}  */}
                        </button>
                    </td>
                    </tr>
                    {/* <Extract /> */}
                    {/* <div id='extract'> */}
                    {this.state.show && <div id='lab'>ID:
                    <input id='cen' type='text' defaultValue={this.props.id }/>
                    </div>}
                    {this.state.show && <div id='lab'>NAME:
                    <input id='cen' type='text' defaultValue={this.props.name }/>
                    </div>}
                    {this.state.show && <div id='lab'>USERNAME:
                    <input id='cen' type='text' defaultValue={this.props.username }/>
                    </div>}
                    {this.state.show && <div id='lab'>EMAIL:
                    <input id='cen' type='text' defaultValue={this.props.email }/>
                    </div>}
                    {this.state.show && <div id='lab'>ADDRESS:
                    <input id='cen' type='text' defaultValue={this.props.address }/>
                    </div>}
                    {this.state.show && <div id='lab'>SUITE:
                    <input id='cen' type='text' defaultValue={this.props.suite }/>
                    </div>}
                    {/* </div> */}
            </React.Fragment>
        )
    }
}

export default User

// class User extends React.Component {
//     constructor () {
//         super()
//         /* Initial state */
//         this.state = {
//             show: false
//         }
//     }

//     showOrHide = (event) => {
//         console.log(event.target.id)
//         /* menuvanje na state so setState() metoda
//         otkako state-ot kje se smeni,
//         komponentata si go vika svojot render metod odnovo
//         (ASINHRONA E, PAZETE! noviot state moze da go procitate
//             samo vo render i so callback) */
//         this.setState({ show: !this.state.show })
//     }
//     render () {
//         return (
//             <React.Fragment>
//                 <div id='greeting'
//                     style={{border: '1px solid black', marginBottom: '5px'}}
//                     className='text'
//                 >
                    
//                     {this.props.id}
//                     <br />
//                     {this.props.name}
//                     <br />
//                     {this.props.email}
                    
//                     <button id='toggle' onClick={this.showOrHide} style={{float: 'right'}}>
//                         Expand
//                     </button>
                    
                    
//                     </div>
//                    {this.state.show && <div><input name={this.props.name }/>DP</div>}
                   
//             </React.Fragment>
//         )
//     }
// }

// export default User


