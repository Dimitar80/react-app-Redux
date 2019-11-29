import React from 'react'
import Error from './Error'
import axios from 'axios'
import './shared.css'
import User from './User'
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

    delraw = (itemId) => {
        // alert('Button Clicked');
        const itemsoff = this.state.udata.filter(user => user.id !== itemId);
    this.setState({ udata: itemsoff });
    }

    // handleDelete = itemId => {
    //     const items = this.state.items.filter(item => item.id !== itemId);
    //     this.setState({ items: items });
    //   };

    componentDidMount () {
        this.setState({ loading: true })
        // console.log(loading)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            // this.setState({ newData: response.data })  
                // console.log(this.state.newData)           
                const users = response.data.map((user) => {
                    return (<User      
                          key={user.id} /*expandForm={this.expandForm} 
                        expandAddress={this.expandAddress}*/ 
                          id={user.id}
                          name={user.name}
                          username={user.username}
                          email={user.email}
                          street={user.address.street}
                          suite={user.address.suite}
                        //   ex={props.showOrHide}
                          del={this.delraw} />
                        )
                    })
                    this.setState({ udata: users })
                    console.log(this.state.udata)
                })
        .catch((error) => {
            console.log(error)
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
                    </thead>

                    <tbody className="table-body">
                    {/* <this.props.component data={this.state.udata} /> */}
                    {this.state.udata}

                    {/* {this.state.udata &&
                            <User
                               key={this.state.wdata.id}
                               id={this.state.wdata.id}
                               name={this.state.wdata.name}
                               username={this.state.wdata.username}
                               email={this.state.wdata.email}
                               street={this.state.wdata.address.street}
                               suite={this.state.wdata.address.suite}
                               ex={props.showOrHide}
                               del={this.delraw}
                            />
                        } */}

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