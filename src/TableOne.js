import React from 'react'
import Error from './Error'
import axios from 'axios'
import './shared.css'
import User from './User'
// import UserList from './UsersList'
// import ExtractUser from './ExtractUser'
import AddNewUser from './AddNewUser'


class TableOne extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            udata: [],
            error: null,
            loading: false,
            showModal: null,
            show: false,
            newData: []
            // newData: a 
            // show: null
            
        }
    }
//     remove = (rowId) => {
//     // Array.prototype.filter returns new arrayc
//     // so we aren't mutating state here
//     const arrayCopy = this.state.newData.filter((row) => row.id !== rowId);
//     this.setState({data: arrayCopy});
//   };
     // delrow = () => {
    //     alert('Button Clicked');
    //     const itemsoff = this.state.newData.filter(function(user){
    //         return user.id !== user.Id;
    //     });
    //     // console.log(user)
    //     console.log(itemsoff)
    // this.setState({ newData: itemsoff });
    // console.log(this.state.newData)
    // }

//     var numbers = [1, 3, 6, 8, 11];

// var lucky = numbers.filter(function(number) {
//   return number > 7;
// });
// [ 8, 11 ]
     
// POLUDEKJU //
    // delrow = (itemId) => {
    //     alert('Button Clicked');
    //     // console.log(this.state.newData)
    //     const rowoff = this.state.newData.filter((user) => user.id !== itemId);
    //     // console.log(itemId)
    //     // console.log(user.id)
    //     // console.log(itemsoff)
    // this.setState({ newData: rowoff });
    // console.log(rowoff)
    // // console.log(this.state.newData)
    // }
    delrow = (itemId) => {
        alert('Button Clicked');
        // console.log(this.state.newData)
        const rowoff = this.state.udata.filter((user) => user.id !== itemId);
        console.log(this.state.udata)
        // console.log(itemId)
        // console.log(user.id)
        // console.log(itemsoff)
    this.setState({ udata: rowoff });
    console.log(rowoff)
    // console.log(this.state.newData)
    }
    

   

    componentDidMount () {
        // this.setState({ loading: true })
        // console.log(loading)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            // var c = response.data
                   const users = response.data.map((user) => {
                    return (<User      
                          key={user.id} 
                          id={user.id}
                          name={user.name}
                          username={user.username}
                          email={user.email}
                          street={user.address.street}
                          suite={user.address.suite}
                        //   ex={props.showOrHide}
                          del={this.delrow} />
                        )
                    })
                    this.setState({ udata: users })
                    console.log(this.state.udata)
                })
        .catch((error) => {
            console.log(error + 'error')
            this.setState({ error: <Error />, loading: false })
        })
    }
    
    
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
                    <tr id='hds'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address-street</th>
                        <th>Address-suite</th>
                        <th>Edit</th>
                    </tr>
                    </thead>

                    <tbody className="table-body">
                    {/* <this.props.component data={this.state.udata} /> */}
                    {this.state.udata}

                   {this.state.error}
                   {this.state.loading && <h1 
                   style={{color: "red", fontSize: "20px", textAlign: 'center'}}>LOADING...</h1>}
                    </tbody>
                </table>
                
            </React.Fragment>
        )
    }
}

export default TableOne