import React from 'react'
import User from './User'





// delete = (props) => {
//         let selUser = this.props.data.id
//      if(udata === this.props.data){
//          for( let i = 0; i < udata.length; i++){
//              if(udata.length[i].id === selUser){
//                  console.log(selUser)
//                  udata.slice()
//                  return
//              } else{ console.log('error')}
//          }
//      }
//        }
const UsersList = (props) => {
    return props.data.map((element) => {
        console.log(props.data)
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
        />
    })
}



export default UsersList

