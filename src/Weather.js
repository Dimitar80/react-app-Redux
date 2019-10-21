import React from 'react'
import './style.css'
import './shared.css'

class Weather extends React.Component {
    constructor(){
        super()
        this.state = {
            show: false,
            buttonText: "Refresh",
            
        }
    }
    showOrHide = (event) => {
        console.log(event.target.id)
        /* menuvanje na state so setState() metoda
        otkako state-ot kje se smeni,
        komponentata si go vika svojot render metod odnovo
        (ASINHRONA E, PAZETE! noviot state moze da go procitate
            samo vo render i so callback) */
        this.setState({ show: !this.state.show });

        console.log("Button clicked...")
        let buttonText = this.state.buttonText === "Refresh" ? "Refreshed" : "Refresh"
        this.setState({buttonText: buttonText});
        
        // let newColor = this.state.color === green ? yellow : green
        // this.setState({color: newColor});
    
    }

    render () {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.press}</td>
                    <td>{this.props.hum}</td>
                    <td>{this.props.temp}</td>
                    <td>
                        <button id='toggle' 
                        onClick={this.showOrHide} /*style={{backgroundColor:this.state.newColor}}*/>
                        {this.state.buttonText}
                        </button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}

export default Weather