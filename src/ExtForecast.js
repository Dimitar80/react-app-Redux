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

    saveInput = (event) => {
        this.setState({city: event.target.value})
    }

    capFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
   // Start - On SEARCH BUTTON //
    showNewCity = () => {
        let newCity = this.capFirstLetter(this.state.city)
        document.getElementById('new-city').value = null
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ newCity +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
        .then((response) => {
            console.log(response.data)
            this.setState({wdata: response.data })
        })
        .catch((error) => {
            console.log(error)
            this.setState({
                wdata: <Error />
            })
        })
    }

    componentDidMount () {
        // this.setState({ loading: true })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`)
            .then((response) => {
                console.log(response.data)
            this.setState({
                wdata: response.data
            })
            console.log(this.state.wdata)
            // console.log(this.state.wdata.weather);
            console.log(this.state.wdata.name)
            console.log(this.state.wdata.sys.country)
            })
            .catch((error) => { // error zaso ne sveti ???//
                this.setState({
                    wdata: <Error />
                })
            console.log(this.state.wdata)
            })
    }
    
    render () {

    
        return (
            <React.Fragment>
               
                          {this.state.wdata && 
                          <table className="table">
                          <tbody className="products-table-body">
                            
                           {/* <td>{this.state.wdata.sys.country}, {this.state.wdata.name}</td> */}
                           <td>{this.state.wdata.main.temp}</td>
                           <td>{this.state.wdata.wind.speed}</td>
                           <td>{this.state.wdata.clouds.all}</td>
                           <td>{this.state.wdata.main.pressure}</td>
                           <td>{this.state.wdata.main.humidity}</td>
                           <td>{this.state.wdata.sys.sunrise}</td>
                           <td>{this.state.wdata.sys.sunset}</td> 
                           <td>Lon {this.state.wdata.coord.lon}° E, Lat 
                           {this.state.wdata.coord.lat}° N</td>
                          
                           </tbody>
                           </table>
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
