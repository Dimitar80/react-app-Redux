import React from 'react'
import Error from './Error'
// import Weather from './Weather'
import axios from 'axios'
import './shared.css'
// import User from './User'
// import UserList from './UsersList'

//HOC//
class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            udata: [],
            error: null,
            loading: false
        }
    }

    componentDidMount () {
        this.setState({ loading: true })
        // console.log(loading)
        axios({
            method: this.props.methodType,
            url: this.props.url
        }).then((response) => {
            console.log(response.data)
            this.setState({ udata: response.data, loading: false })
        })
        .catch((error) => {
            console.log(error)
            this.setState({ error: <Error />, loading: false })
        })
    }
    
    render () {
        return (
            <React.Fragment>
                <div>
                    <h1>Users</h1>
                </div>
                <table className="table">
                    <thead className="table-head">
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