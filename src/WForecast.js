import React from 'react'
import axios from 'axios'
import './shared.css'
import './style.css'
import CurrForecast from './CurrForecast'
import Error from './Error'

class WForecast extends React.Component {
    constructor (props) {
        super(props)
        /*Initial State*/ 
        this.state = {
            show: false,
            wdata:null,
         // wdata: [],{},
            array: [],
            buttonText: "Refresh",
            show: false,
            error: null
        }
    }

    refresh = (event) => {
        console.log(event.target.id)

        this.setState({ show: !this.state.show });

        console.log("Button clicked...")
        let buttonText = this.state.buttonText === "Refresh" ? "Refreshed" : "Refresh"
        this.setState({buttonText: buttonText});
    }
    
    componentDidMount () {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`)
            .then((response) => {
                console.log(response.data)
                // const newdata = response.data.weather[0]
                // const newdata = response.data
                // console.log(newdata)
                // console.log(newdata.sys.country)
            this.setState({
                wdata: response.data,
            })
            console.log(wdata)
            // console.log(this.state.wdata.weather);
            console.log(this.state.wdata.name)
            })
            .catch((error) => { // error zaso ne sveti ???//
                this.setState({
                    wdata: <Error />
                })
                console.log(wdata)
            })
    }
    
    render () {

    
        return (
            <React.Fragment>
                <div>
                {/* { JSON.stringify(this.state.wdata)} */}
                {/* {this.state.wdata} */}
               </div>
               <div>
                   <h1 id='wftitle'>Weather Forecast</h1>
                   <div id='srcleft'>
                        <input id='cico' placeholder='Enter City' style={{textAlign:'center'}}/>
                        <button id='src-btn' onClick={this.newCity}>Search</button>
                   </div>
                   <div id='srcright'>
                        <h2 id='wfcwf'>Current Weather Forecast</h2>
                        <button id='refresh' 
                        onClick={this.refresh} /*style={{backgroundColor:this.state.newColor}}*/>
                        {/* {this.state.buttonText} */}Referesh 
                        </button>
                    </div>
               </div>
               <div id='wapp-container'>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th>City, Country</th>
                            <th>Temperature</th>
                            <th>Wind</th>
                            <th>Cloudiness</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                            <th>Sunrise</th>
                            <th>Sunset</th>
                            <th>Geo Coords</th>
                        </tr>
                    </thead>
                    <tbody className="products-table-body">
                          <CurrForecast 
                            //    key={this.state.wdata.id}
                              city={this.state.wdata.name}
                           country={this.state.wdata.sys.country}
                       temperature={this.state.wdata.main.temp}
                              wind={this.state.wdata.wind.speed}
                        cloudiness={this.state.wdata.clouds.all}
                          pressure={this.state.wdata.main.pressure}
                          humidity={this.state.wdata.main.humidity}
                           sunrise={this.state.wdata.sys.sunrise}
                            sunset={this.state.wdata.sys.sunset} 
                      geocoordsLon={this.state.wdata.sys.coord.lon}
                      geocoordsLat={this.state.wdata.sys.coord.lat}/>

                    {/* {  
                        !this.state.wdata 
                        ?<tr> 
                            <td>LOADING ...</td>
                        </tr>
                        : this.state.wdata
                    } */}
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        )
    }
}

export default WForecast