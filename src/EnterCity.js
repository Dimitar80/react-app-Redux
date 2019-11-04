import React from 'react'
import './style.css'
import './shared.css'

const EnterCity = () => {
    return (
    <div>
        <tr>
            <td id='df' colSpan='7'>
            <h2 style={{color: 'red', fontWeight: '700'}}>
                Please Enter City and Press Get Weather button!
                </h2>
            </td>
        </tr>
        {/* <button id='go_back' onClick={() => window.history.back()}>
            Go back
        </button> */}
    </div>)
}

export default EnterCity