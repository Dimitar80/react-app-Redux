import React from 'react'
import Error from './Error'
import axios from 'axios'
import './shared.css'

class Wrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [],
            error: null,
            loading: false
        }
    }

    componentDidMount () {
        this.setState({ loading: true })
        axios({
            method: this.props.methodType,
            url: this.props.url
        }).then((response) => {
            this.setState({ data: response.data, loading: false })
        })
        .catch((error) => {
            this.setState({ error: <Error />, loading: false })
        })
    }
    
    render () {
        return (
            <React.Fragment>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th id='f'>Id</th>
                            <th id='s'>Name</th>
                            <th id='t'>User Name</th>
                            <th id='fo'>E-mail</th>
                            <th id='fi'>Adress</th>
                            <th id='si'>Suite</th>
                            <th id='se'>Expand</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                    <this.props.component data={this.state.data} />
                   {this.state.error}
                   {this.state.loading && <tr><td>LOADING...</td></tr>}
                    </tbody>
                </table>
                
            </React.Fragment>
        )
    }
}

export default Wrapper