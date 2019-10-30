import React from 'react'
import axios from 'axios'
import './shared.css'
import './style.css'
import CurrForecast from './CurrForecast'
import Error from './Error'
import Clock from './Clock'
import ExtForecast from './ExtForecast'

// let time = new Date().toLocaleString();
// let currentdate = new Date(); 
//     let datetime = currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + ", "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ':'
//                 + currentdate.getSeconds()

class WForecast extends React.Component {
    constructor (props) {
        super(props)
        /*Initial State*/ 
        this.state = {
            show: false,
            wdata:null,
         // wdata: [],{},
            // array: [],
            city: '',
            buttonText: "Refresh",
            buttonTextTwo: "Open",
            error: null,
            // loading: false
        }
    }
     
    //Open/CLose btn//
    ExtFore = (event) => {
        console.log(event.target.id)
       this.setState({ show: !this.state.show });

        console.log("Button clicked...")
        let butText = this.state.buttonTextTwo === "Open" ? "Close" : "Open"
        this.setState({buttonTextTwo: butText});

        saveInput = (event) => {
            this.setState({city: event.target.value})
        }
    
        // capFirstLetter(string) {
        //     return string[0].toUpperCase() + string.slice(1);
        // }
        
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

    }

    // refresh = (event) => {
    //     console.log(event.target.id)
    //    this.setState({ show: !this.state.show });

    //     console.log("Button clicked...")
    //     let buttonText = this.state.buttonText === "Refresh" ? "Refreshed" : "Refresh"
    //     this.setState({buttonText: buttonText});
    // }


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
    // End - On SEARCH BUTTON //
    

    // Default 'SKOPJE' City//
    componentDidMount () {
        // this.setState({ loading: true })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`)
            .then((response) => {
                console.log(response.data)
                // const newdata = response.data.weather[0]
                // const newdata = response.data
                // console.log(newdata)
                // console.log(newdata.sys.country)
            this.setState({
                wdata: response.data
            })
            console.log(this.state.wdata)
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
                <div>
                {/* { JSON.stringify(this.state.wdata)} */}
                {/* {this.state.wdata} */}
               </div>
               <div>
                   <h1 id='wftitle'>Weather Forecast </h1> 
                   <div id='srcleft'>
                       {/* Automatic addin and finishing when typping */}
                        <input 
                        className='cico' 
                        id='new-city'
                        onChange={this.saveInput}
                        placeholder='Enter City' 
                        style={{textAlign:'center'}}
                        />
                        <button id='src-btn' onClick={this.showNewCity}>Get Weather</button>
                   </div>
                   <div id='srcright'>
                        <h2 className='wfcwf'>Current Weather Forecast in: &nbsp; 
                <span style={{color: 'black'}}>
                {this.state.wdata ? this.state.wdata.name + ', ' + this.state.wdata.sys.country : null}
                </span>
                 </h2>
                 {/* <p>{datetime}</p>
                 <p>{time}</p> */}
                 
                        <button id='refresh' onClick={this.refresh} >
                        Referesh 
                        </button>
                    </div>
                    <div style={{textAlign: 'center'}}><Clock /></div>
               </div>
               <div id='wapp-container'>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            {/* <th>City, Country</th> */}
                            <th>Temperature - °C</th>
                            <th>Wind - m/s</th>
                            <th>Cloudiness - %</th>
                            <th>Pressure - atm</th>
                            <th>Humidity - g/m3</th>
                            <th>Sunrise - am</th>
                            <th>Sunset - pm</th>
                            <th>Geo Coords</th>
                        </tr>
                    </thead>
                     <tbody className="products-table-body">
                     {this.state.wdata && <CurrForecast 
                            //    key={this.state.wdata.id}
                        //       city={this.state.wdata.name}
                        //    country={this.state.wdata.sys.country}
                       temperature={this.state.wdata.main.temp}
                              wind={this.state.wdata.wind.speed}
                        cloudiness={this.state.wdata.clouds.all}
                          pressure={this.state.wdata.main.pressure}
                          humidity={this.state.wdata.main.humidity}
                           sunrise={this.state.wdata.sys.sunrise}
                            sunset={this.state.wdata.sys.sunset} 
                      geocoordsLon={this.state.wdata.coord.lon}
                      geocoordsLat={this.state.wdata.coord.lat}/>
                      }
                   
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
                <div id='extfield'>
                <h2 className='wfcwf'>Show Extended Weather Forecast in: &nbsp; 
                <span style={{color: 'black'}}>
                {this.state.wdata ? this.state.wdata.name + ', ' + this.state.wdata.sys.country : null}
                </span> 
                 </h2> &nbsp;
                <button  id='btn-ext' onClick={this.ExtFore}> {this.state.buttonTextTwo} </button>
                </div>
                {this.state.show &&  <ExtForecast 
                /*r={this.state.wdata.name}*/ /> }
                
                
            </React.Fragment>
        )
    }
}

export default WForecast