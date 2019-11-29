import React from 'react'
import User from './User'


// delraw = (itemId) => {
//     alert('Button Clicked');
//     const itemsoff = this.state.data.filter(item => item.id !== itemId);
// this.setState({ items: itemsoff });
// }


const UsersList = (props) => {
    return props.udata.map((element) => {
        // console.log(props.data)
        console.log(element)
        return <User
            key={element.id}
            id={element.id}
            name={element.name}
            username={element.username}
            email={element.email}
            street={element.address.street}
            suite={element.address.suite}
            ex={props.showOrHide}
            del={props.delraw}
            // del={(itemid)=> (alert('btn')) }
        />
    })
}

export default UsersList

