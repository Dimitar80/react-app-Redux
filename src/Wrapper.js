import React from 'react'
import Error from './Error'
// import Weather from './Weather'
import axios from 'axios'
import './shared.css'
// import User from './User'
// import UserList from './UsersList'
// import ExtractUser from './ExtractUser'
import AddNewUser from './AddNewUser'

//HOC//
class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            udata: [],
            error: null,
            loading: false,
            showModal: null,
            show: false
            // show: null
        }
    }

    // addUser = () => {
    //     this.setState({ showModal:
    //         <div className='my-modal'>
    //             <div className='form-container'>
    //                 <div /*className='text-container'*/>Add new user</div>
    //                 <input id='name' type='text' /*className='form-control'*/ placeholder='name' />
    //                 <input id='username' type='text' /*className='form-control'*/ placeholder='username' />
    //                 <input id='email' type='text' /*className='form-control'*/ placeholder='email' />
    //                 <input id='address' type='text' /*className='form-control'*/ placeholder='address' />
    //                 <button id='save' /*className='btn btn-success'*/
    //                 onClick={() => this.saveUser()}>Save</button>
    //                 <button id='close' /*className='btn btn-secondary'*/
    //                 onClick={() => this.setState({ showModal: null })}>Close</button>
    //             </div>
    //         </div>
    //     })
    // }

    // // OVA //
    // addUser = () => {
    //     let add = 
    //     this.state.showModal === null ?
    //         <div className='my-modal'>
    //             <div className='form-container'>
    //                 <div /*className='text-container'*/>Add new user</div>
    //                 <input id='name' type='text' /*className='form-control'*/ placeholder='name' />
    //                 <input id='username' type='text' /*className='form-control'*/ placeholder='username' />
    //                 <input id='email' type='text' /*className='form-control'*/ placeholder='email' />
    //                 <input id='streetAddress' type='text' 
    //                 /*className='form-control'*/ placeholder='street address' 
    //                 />
    //                 <input id='suite' type='text' /*className='form-control'*/ placeholder='suite' />
    //                 <button id='save' /*className='btn btn-success'*/
    //                 onClick={() => this.saveUser()}>Save</button>
    //                 <button id='close' /*className='btn btn-secondary'*/
    //                 onClick={() => this.setState({ showModal: null })}>Close</button>
    //             </div>
    //         </div> : null;

    //         this.setState({showModal : add})
    //     }

    // addUser = () => {
    //     this.setState({ show:
    //         <div className='myMod'>
    //             <div className='pr'>
    //                 <div className='anu'>Add new user</div>
    //                 <input id='name' type='text' className='fc' placeholder='name' />
    //                 <input id='username' type='text' className='fc' placeholder='username' />
    //                 <input id='email' type='text' className='fc' placeholder='email' />
    //                 <input id='address' type='text' className='fc' placeholder='address' />
    //                 <button id='save' className='wftitle'
    //                 onClick={() => this.saveUser()}>Save</button>
    //                 <button id='close' /*className='btn btn-secondary'*/
    //                 onClick={() => this.setState({ show: null })}>Close</button>
    //             </div>
    //         </div>
    //     })
    // }


    componentDidMount () {
        this.setState({ loading: true })
        // console.log(loading)
        axios({
            method: this.props.methodType,
            url: this.props.url
        }).then((response) => {
            // console.log(response.data)
            this.setState({ udata: response.data, loading: false })
            console.log(this.state.udata)
        })
        .catch((error) => {
            console.log(error)
            this.setState({ error: <Error />, loading: false })
        })
    }
    
    // delete = (props) => {
    //        let selUser =           /*<ExtractUser id={this.props.id} />*/
    //        console.log(selUser)
    //        arData = this.state.udata
    //        console.log(arData)
    //     if(arData){
    //         console.log(arData)
    //         for( let i = 0; i < arData.length; i++){
    //             if(arData.length[i].id === selUser){
    //                 // console.log(selUser)
    //                 arData.slice(i, 1);
    //                 console.log(arData.slice(i, 1))
    //                 return
    //             } else{ console.log('error')}
    //         }
    //     }
    // }
    OpCl = () => {
        this.setState({ show: !this.state.show });
    }
    

    
    render () {
        return (
            <React.Fragment>
                <div className='backgCol'>
                    <h1>Users</h1>
                </div>

                <table className="table">
                {/* {this.state.showModal} */}
                    <thead className="table-head">
                    <tr>
                        <th colSpan = '7'>
                            <button id='adus' onClick={this.OpCl}> 
                            Add new user
                            </button>
                        </th>
                    </tr>
                    {this.state.show && <AddNewUser  opcl={this.OpCl} />}
                        <tr>
                            <th id='f'>Id</th>
                            <th id='s'>Name</th>
                            <th id='t'>User Name</th>
                            <th id='fo'>E-mail</th>
                            <th id='fi'>Street address</th>
                            <th id='si'>Suite</th>
                            <th id='se'>Expand</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                    <this.props.component data={this.state.udata} />
                   {this.state.error}
                   {this.state.loading && <h1 
                   style={{color: "red", fontSize: "20px", textAlign: 'center'}}>LOADING...</h1>}
                    </tbody>
                </table>
                
            </React.Fragment>
        )
    }
}

export default Wrapper