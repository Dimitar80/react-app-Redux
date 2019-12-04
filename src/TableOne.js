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

    // DELETE Function//
    // delrow = (itemid) => {
    //     alert('Button Clicked');
    //     const rowoff = this.state.udata.filter((user) => user.id !== itemid);
    //     // console.log(user.id)
    //     // console.log(this.state.udata.user.name)
    //     // console.log(itemsoff)
    // this.setState({ udata: rowoff });
    // // console.log(rowoff)
    // console.log(this.state.udata)
    // // console.log(this.state.newData)
    // }

    // DEL and ADD user //
    delrow = (itemid) => {
        alert('Button Clicked');
        const rowoff = this.state.c.filter((user) => user.id !== itemid);
        // console.log(user.id)
        // console.log(this.state.udata.user.name)
        // console.log(itemsoff)
    this.setState({ udata: rowoff });
    // console.log(rowoff)
    console.log(this.state.udata)
    // console.log(this.state.newData)
    }

    addSave = (id) => {
        alert('Saved');
        const newUser = {
            id: id,
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            address: document.getElementById('stAddress').value
        }
        console.log(newUser)
        // console.log(newUser.name)
        console.log(this.state.udata)
            let newArray = []
                if (!newUser.id  /*newUser.id === null*/) {
                    // newArray = this.state.udata.slice()
                    newUser.id = this.state.udata[this.state.udata.length - 1].id + 1
                    console.log(newUser.id)
                    newArray.push(newUser)
                   
                    console.log(newArray)
                    
                }  /*console.log(newArray)*/ /*else 
                    newArray = this.state.udata.slice()
                    for (let i = 0; i < newArray.length; i++) {
                        if (newArray[i].id === newUser.id) {
                            newArray.splice(i, 1, newUser)
                            break
                        }
                    }
                }*/ else {
                    console.log('error')
                }
                alert('User successfully added')
                this.setState({udata: newArray})   
    }
    

   

    componentDidMount () {
        // this.setState({ loading: true })
        // console.log(loading)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            var c = response.data
            // let users = []
            console.log(c)
                   let users = c.map((user) => {
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
                    // console.log(users)
                    console.log(this.state.udata)
                    // console.log(this.state.udata.length - 1)
                    // console.log(this.state.udata.name)
                })
        .catch((error) => {
            console.log(error + ' Greska')
            this.setState({ error: <Error />, loading: false })
        })
    }
    
    
    OpCl = () => {
        this.setState({ show: !this.state.show });
    }

    
   render () {
        return (
            <React.Fragment>
             <div id='userAll'>
                <div className='compHead'>
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
                    {this.state.show && <AddNewUser  opcl={this.OpCl} save={this.addSave} />}
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
              </div>
            </React.Fragment>
        )
    }
}

export default TableOne