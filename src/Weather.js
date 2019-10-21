import React from 'react'
import './style.css'

class Weather extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div id='greeting'
                    style={{border: '1px solid black', marginBottom: '5px'}}
                    className='text'
                >
                    {this.props.id}
                    <br />
                    {this.props.name}
                    <br />
                    {this.props.country}
                    <button >Edit</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Weather