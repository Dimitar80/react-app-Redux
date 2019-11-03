import React from 'react'
import axios from 'axios'
import Error from './Error'
import './style.css'
import './shared.css'


class ExtForecast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wdata : null,
            error: null,
        }
    }

//     saveInput = (event) => {
//         this.setState({city: event.target.value})
//     }

//     capFirstLetter(string) {
//         return string[0].toUpperCase() + string.slice(1);
//     }
//    // Start - On SEARCH BUTTON //
//     showNewCity = () => {
//         let newCity = this.capFirstLetter(this.state.city)
//         document.getElementById('new-city').value = null
//         axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ newCity +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
//         .then((response) => {
//             console.log(response.data)
//             this.setState({wdata: response.data })
//         })
//         .catch((error) => {
//             console.log(error)
//             this.setState({
//                 wdata: <Error />
//             })
//         })
//     }

    componentDidMount () {
        // this.setState({ loading: true })
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`)
            .then((response) => {
                console.log(response.data)
            this.setState({
                wdata: response.data
            })
            console.log(this.state.wdata)
            console.log(this.state.wdata.list[0].main)
            })
            .catch((error) => { // error zaso ne sveti ???//
                this.setState({
                    wdata: <Error />
                })
            console.log(this.state.wdata)
            console.log(Object.keys(this.state.wdata)[0]);
            })
    }
    
    render () {
      
        return (
            <React.Fragment>
               
                          {this.state.wdata && 
                          <div id='wapp-container'>
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
                              {this.state.wdata.list[0].dt_txt}
                              </span>
                              </h2>
                              </td>
                        </tr>
                        <tr>
                           <td>{this.state.wdata.list[0].main.temp}</td>
                           <td>{this.state.wdata.list[0].wind.speed}</td>
                           {/* <td>{this.state.wdata.list[0].weather[0].description}</td> */}
                           <td>{this.state.wdata.list[0].clouds.all}</td>
                           <td>{this.state.wdata.list[0].main.pressure}</td>
                           <td>{this.state.wdata.list[0].main.humidity}</td>
                        </tr>
                        <tr>
                         <td id='df' colSpan='5'>
                             <h2 id='nm'>Daily forecast &nbsp;
                             <span style={{color: 'red'}}>
                              {this.state.wdata.list[1].dt_txt}
                              </span>
                              </h2>
                              </td>
                        </tr>
                        <tr>
                           <td>{this.state.wdata.list[1].main.temp}</td>
                           <td>{this.state.wdata.list[1].wind.speed}</td>
                           {/* <td>{this.state.wdata.list[0].weather[0].description}</td> */}
                           <td>{this.state.wdata.list[1].clouds.all}</td>
                           <td>{this.state.wdata.list[1].main.pressure}</td>
                           <td>{this.state.wdata.list[1].main.humidity}</td>
                        </tr>
                        <tr id='visina'>
                         <td id='df' colSpan='5'>
                             <h2 id='nm'>Daily forecast &nbsp;
                             <span style={{color: 'red'}}>
                              {this.state.wdata.list[2].dt_txt}
                              </span>
                              </h2>
                              </td>
                        </tr>
                        <tr>
                           <td>{this.state.wdata.list[2].main.temp}</td>
                           <td>{this.state.wdata.list[2].wind.speed}</td>
                           {/* <td>{this.state.wdata.list[0].weather[0].description}</td> */}
                           <td>{this.state.wdata.list[2].clouds.all}</td>
                           <td>{this.state.wdata.list[2].main.pressure}</td>
                           <td>{this.state.wdata.list[2].main.humidity}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                          }
                          
            </React.Fragment>
        )
    }
}

export default ExtForecast


// {/* <td>{this.state.wdata.sys.country}, {this.state.wdata.name}</td> */}
// <td>{this.state.wdata.list[0].main.temp}</td>
// <td>{this.state.wdata.list[0].wind.speed}</td>
// <td>{this.state.wdata.list[0].clouds.all}</td>
// <td>{this.state.wdata.list[0].main.pressure}</td>
// <td>{this.state.wdata.list[0].main.humidity}</td>
// {/* <td>{this.state.wdata.sys.sunrise}</td>
// <td>{this.state.wdata.sys.sunset}</td> 
// <td>Lon {this.state.wdata.coord.lon}° E, Lat 
// {this.state.wdata.coord.lat}° N</td> */}
// {/* <td>{this.state.wdata.coord.lon}</td>
// <td>{this.state.wdata.coord.lat}</td> */}


 {/* <td>{this.state.wdata.main.temp}</td> */}
                           {/* <td>{this.state.wdata.wind.speed}</td>
                           <td>{this.state.wdata.clouds.all}</td>
                           <td>{this.state.wdata.main.pressure}</td>
                           <td>{this.state.wdata.main.humidity}</td>
                           <td>{this.state.wdata.sys.sunrise}</td>
                           <td>{this.state.wdata.sys.sunset}</td> 
                           <td>Lon {this.state.wdata.coord.lon}° E, Lat 
                           {this.state.wdata.coord.lat}° N</td> */}
