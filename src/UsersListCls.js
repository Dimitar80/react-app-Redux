import React from 'react'
import User from './User'

class UsersListCls extends React.Component {
    constructor () {
        super()
        this.state = {
             users : []
        }
    }

    UsersList = (props) => {
        return props.data.map((element) => {
            // console.log(props.data)
            this.setState({users: props.data})
            console.log(users)
            // console.log(element)
            // return <User
            //     key={element.id}
            //     id={element.id}
            //     name={element.name}
            //     username={element.username}
            //     email={element.email}
            //     street={element.address.street}
            //     suite={element.address.suite}
            //     ex={props.showOrHide}
            //     del={props.delraw}
            // />
        })
    }

    render() {
        return (
            <User
            key={element.id}
            id={element.id}
            name={element.name}
            username={element.username}
            email={element.email}
            street={element.address.street}
            suite={element.address.suite}
            ex={props.showOrHide}
            del={props.delraw}
        />
        )
    }
}

export default UsersListCls