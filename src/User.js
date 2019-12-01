import React from 'react'
// import Extract from 'react';
import './style.css'
import './shared.css'
import ExtractUser from './ExtractUser'


  const green = '#39D1B4';
  const yellow = '#FFD712';

class User extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /* Initial state */
        this.state = {
            show: false,
            expText: "Expand",
            
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
        this.setState({epxText: buttonText});
    }

    // delete = (props) => {
    //     let selUser = this.props.data.id
    //  if(udata === this.props.data){
    //      for( let i = 0; i < udata.length; i++){
    //          if(udata.length[i].id === selUser){
    //              console.log(selUser)
    //              udata.slice()
    //              return
    //          } else{ console.log('error')}
    //      }
    //  }
    //    }

    // delraw = (itemId) => {
    //     alert('Button Clicked');
    //     const itemsoff = this.props.data.filter(item => item.id !== itemId);
    // this.setState({ items: itemsoff });
    // }

    

    render () {
        return (
            <React.Fragment>
                    
                    <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.username}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.street}</td>
                    <td>{this.props.suite}</td>
                    <td>
                        <button id='toggle'  onClick={this.showOrHide}>
                        {this.state.expText}
                        </button>
                    </td>
                    </tr>
                    {this.state.show && <ExtractUser 
                    key={this.props.id}
                    // expand={this.expand}
                    id={this.props.id} 
                    name={this.props.name}
                    username={this.props.username}
                    email={this.props.email}
                    street={this.props.street}
                    suite={this.props.suite}
                    close={this.showOrHide}
                    delete={this.props.del}
                    />
                    }

                    {/* <div id='extract'> */}
                    {/* {this.state.show && <div id='lab'>ID:
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
                    </div>} */}
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


