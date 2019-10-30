import React from 'react'

const Error = () => {
    return <div>
        <tr>
        Oops, something went wrong.
        Try going back or refreshing the page.
        </tr>
        <button id='go_back' onClick={() => window.history.back()}>
            Go back
        </button>
    </div>
}

export default Error