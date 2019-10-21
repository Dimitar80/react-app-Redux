import React from 'react'
import User from './User'

const UsersList = (props) => {
    return props.data.map((element) => {
        console.log(element)
        return <User
            key={element.id}
            id={element.id}
            name={element.name}
            username={element.username}
            email={element.email}
            address={element.address.street}
            suite={element.address.suite}
        />
    })
}


export default UsersList