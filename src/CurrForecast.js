import React from 'react'
import './style.css'
import './shared.css'


class CurrForecast extends React.Component {
    constructor(){
        super()
        this.state = {
            show: false,
            buttonText: "Refresh",
            
        }
    }
    // showOrHide = (event) => {
    //     console.log(event.target.id)
    //     /* menuvanje na state so setState() metoda
    //     otkako state-ot kje se smeni,
    //     komponentata si go vika svojot render metod odnovo
    //     (ASINHRONA E, PAZETE! noviot state moze da go procitate
    //         samo vo render i so callback) */
    //     this.setState({ show: !this.state.show });

    //     console.log("Button clicked...")
    //     let buttonText = this.state.buttonText === "Refresh" ? "Refreshed" : "Refresh"
    //     this.setState({buttonText: buttonText});
        
    //     // let newColor = this.state.color === green ? yellow : green
    //     // this.setState({color: newColor});
    
    // }

    render () {
        return (
            <React.Fragment>
               <tr>
                    <td>{this.props.cityName}Output, Output {this.props.countryName} </td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                    <td>{this.props.currentTemp}Output</td>
                </tr>
                
            </React.Fragment>
        )
    }
}

export default CurrForecast