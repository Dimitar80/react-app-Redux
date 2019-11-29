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

    // delraw = (itemId) => {
    //     // alert('Button Clicked');
    //     const itemsoff = this.udata.filter(item => item.id !== itemId);
    // this.setState({ items: itemsoff });
    // }
    
   render () {
        return (
            <React.Fragment>
                <div className='backgCol'>
                    <h1>Users</h1>
                </div>

                <table className="table">
                {/* {this.state.showModal} */}
                    <thead className="table-head">
                     {/* AddNewUser btn-start shows rows data on form onClick */}
                    <tr>
                        <th id='hd' colSpan = '7'>
                            <button id='adus' onClick={this.OpCl}> 
                            Add new user
                            </button>
                        </th>
                    </tr>
                     {/* AddNewUser btn-end  */}
                    {/* AddNewUser Form-start  */}
                    {this.state.show && <AddNewUser  opcl={this.OpCl} />}
                    {/* AddNewUser Form-end  */}
                    </thead>

                    <tbody className="table-body">
                    <this.props.component data={this.state.udata} />

                    {/* {this.state.udata.map((item) => {
                         return <User
                               key={item.id}
                               id={item.id}
                               name={item.name}
                               username={item.username}
                               email={item.email}
                               street={item.address.street}
                               suite={item.address.suite}
                               ex={props.showOrHide}
                               del={this.delraw}
                            />
                        })} */}

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