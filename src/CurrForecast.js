import React from 'react'
import './style.css'
import './shared.css'


class CurrForecast extends React.Component {
    constructor(){
        super()
        this.state = {
            // show: false,
            // buttonText: "Refresh",
            
        }
    }
  
    render () {
        console.log
        ("CURR TEMP IN " + this.props.city +', '+ this.props.country + ' IS - ' + this.props.temperature)
        console.log(this.props)
        console.log(this.props.name)
        return (
            <React.Fragment>
               <tr>
                    {/* <td>{this.props.city}, {this.props.country} </td> */}
                    <td>{this.props.temperature}</td>
                    <td>{this.props.wind}</td>
                    <td>{this.props.cloudiness}</td>
                    <td>{this.props.pressure}</td>
                    <td>{this.props.humidity}</td>
                    <td>{this.props.sunrise}</td>
                    <td>{this.props.sunset}</td>
                    {/* <td>Lon {this.props.geocoordsLon}° E, Lat 
                    {this.props.geocoordsLat}° N</td>  */}
               </tr>
                
            </React.Fragment>
        )
    }
}

export default CurrForecast
