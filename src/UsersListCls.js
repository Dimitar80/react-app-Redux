import React from 'react'
import User from './User'

class UsersListCls extends React.Component {
    constructor () {
        super()
        this.state = {
             users : []
        }
    }

    UsersData = (props) => {
        return props.data.map((element) => {
            // console.log(props.data)
            this.setState({users: <User
                key={element.id}
                id={element.id}
                name={element.name}
                username={element.username}
                email={element.email}
                street={element.address.street}
                suite={element.address.suite}
                ex={props.showOrHide}
                del={props.delraw}
            />})
            // console.log(users)
            // console.log(element)
             
        })
    }

    handleDelete = itemId => {
        const items = this.state.items.filter(item => item.id !== itemId);
        this.setState({ items: items });
      };

      delraw = (itemId) => {
        alert('Button Clicked');
        const itemsoff = this.props.data.filter(item => item.id !== itemId);
    this.setState({ items: itemsoff });
    }
    render() {
        // return (
        //     <User
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
        // )
    }
}

export default UsersListCls