import React from 'react'

const Error = () => {
    return <div>
       
        <tr>
            <td colSpan='7'>
             Oops, something went wrong.
             Try going back or refreshing the page.
           </td>
        </tr>

        <button id='go_back' onClick={() => window.history.back()}>
            Go back
        </button>
       
    </div>
}

export default Error