import React from 'react'
import './style.css'
import './shared.css'


class ExtForecastSec extends React.Component {
    constructor(){
        super()
        this.state = {
            // show: false,
            // buttonText: "Refresh",
            
        }
    }
  
    render () {
        // SMENI DESIGN I RACIONALNO RESI KAKO KAJ USER SO MAP ili FOR da gi vadi data i dava vo nov red!!!
        //-nova komp. ko so kaza Bojan!?//
        return (
            <React.Fragment>
        <table className="table-ext">
            <thead className="table-head">
              <tr>
                    <th>Temperature - °C</th>
                    <th>Wind - m/s</th>
                    <th>Cloudiness - %</th>
                    <th>Pressure - atm</th>
                    <th>Humidity - g/m3</th>
                    {/* <th>Sunrise - am</th>
                    <th>Sunset - pm</th>
                    <th>Geo Coords</th> */}
              </tr>
            </thead>
            <tbody className="body-ext">
               <tr>
                    <td id='df' colSpan='5'>
                      <h2 id='nm'>Daily forecast &nbsp;
                       <span style={{color: 'red'}}>
                         {this.props.time}
                       </span>
                      </h2>
                    </td>
               </tr>
               <tr>
                    {/* <td>{this.props.city}, {this.props.country} </td> */}
                    <td>{this.props.temperature}</td>
                    <td>{this.props.wind}</td>
                    <td>{this.props.cloudiness}</td>
                    <td>{this.props.pressure}</td>
                    <td>{this.props.humidity}</td>
                    {/* <td>{this.props.sunrise}</td>
                    <td>{this.props.sunset}</td> */}
                    {/* <td>Lon {this.props.geocoordsLon}° E, Lat 
                    {this.props.geocoordsLat}° N</td>  */}
               </tr>
               <tr>
                    <td id='df' colSpan='5'>
                      <h2 id='nm'>Daily forecast &nbsp;
                       <span style={{color: 'red'}}>
                         {this.props.timeOne}
                       </span>
                      </h2>
                    </td>
               </tr>
               <tr>
                    <td>{this.props.temperatureOne}</td>
                    <td>{this.props.windOne}</td>
                    <td>{this.props.cloudinessOne}</td>
                    <td>{this.props.pressureOne}</td>
                    <td>{this.props.humidityOne}</td>
                </tr>
                <tr>
                    <td id='df' colSpan='5'>
                      <h2 id='nm'>Daily forecast &nbsp;
                       <span style={{color: 'red'}}>
                         {this.props.timeTwo}
                       </span>
                      </h2>
                    </td>
               </tr>
               <tr>
                    <td>{this.props.temperatureTwo}</td>
                    <td>{this.props.windTwo}</td>
                    <td>{this.props.cloudinessTwo}</td>
                    <td>{this.props.pressureTwo}</td>
                    <td>{this.props.humidityTwo}</td>
                </tr>
            </tbody>
        </table>
                
            </React.Fragment>
        )
    }
}

export default ExtForecastSec
