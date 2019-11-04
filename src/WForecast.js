import React from 'react'
import axios from 'axios'
import './shared.css'
import './style.css'
import CurrForecast from './CurrForecast'
// import CurrForecastTest from './CurrForecastTest'
import ExtForecast from './ExtForecast'
import ExtForecastSec from './ExtForecastSec'
import Clock from './Clock'
import Error from './Error'
import EnterCity from './EnterCity'
import InputCity from './InputCity'
import ReactTooltip from 'react-tooltip'



// let time = new Date().toLocaleString();
// let currentdate = new Date(); 
//     let datetime = currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + ", "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ':'
//                 + currentdate.getSeconds()

// var green = '#39D1B4';
// var yellow = '#FFD712';

class WForecast extends React.Component {
    constructor (props) {
        super(props)
        /*Initial State*/ 
        this.state = {
            show: false,
            wdata:null,
            wdataex: null,
         // wdata: [],{},
            // array: [],
            // city: null
            city: '', 
            btnRef: "Refresh",
            btnOpenClose: "Open",
            error: null,
            orange: true,
            // wdataexEntered: false
            
        }
    }

    
     
    //Open/CLose btn//
    ExtFore = (event) => {
        console.log(event.target.id)
       this.setState({ show: !this.state.show });
        console.log("Button clicked...")
        
        this.setState({orange: !this.state.orange})

        let butText = this.state.btnOpenClose === "Open" ? "Close" : "Open"
        this.setState({btnOpenClose: butText});
        // kuracB = () => {
        //     let butText = this.state.btnOpenClose === "Open" ? "Close" : "Open"
        //     this.setState({btnOpenClose: butText});
        // }
       }

    // refresh = (event) => {
    //     console.log(event.target.id)
    //    this.setState({ show: !this.state.show });

    //     console.log("Button clicked...")
    //     let butRefreshed = this.state.btnRef === "Refresh" ? "Refreshed" : "Refresh"
    //     this.setState({btnRef: butRefreshed});
    // }
     

    /*saveInput*/ setCity = (event) => {
        // let val = this.state.city ===  event.target.value ? 'error' : event.target.value
        // this.setState({city: val})
        this.setState({city: event.target.value})
    }

    capFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    
    
   // Start - On SEARCH BUTTON //
    showNewCity = () => {
        let newCity = this.capFirstLetter(this.state.city)
        // document.getElementById('new-city').value = null
 
         
     
        axios.all([
            axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ newCity +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040'),
            axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ newCity +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
             ])
            .then(axios.spread((responseOne, responseTwo ) => {
                console.log(responseOne.data)
                console.log(responseTwo.data)
            this.setState({
                wdata: responseOne.data,
                wdataex: responseTwo.data
             })
            console.log(this.state.wdata)
            console.log(this.state.wdataex)
            }))
        .catch((error) => {
            console.log(error)
            this.setState({
                wdata: <Error />
            })
        })

}
    // End - On SEARCH BUTTON //
    

    // Default 'SKOPJE' City
    // componentDidMount () {
    //     // this.setState({ loading: true })
    //     axios.all([
    //         axios.get(`https://api.openweathermap.org/data/2.5/weather?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`),
    //         axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`),
    //     ])
    //         .then(axios.spread((responseOne, responseTwo ) => {
    //             console.log(responseOne.data)
    //             console.log(responseTwo.data)
    //             // const newdata = response.data.weather[0]
    //             // const newdata = response.data
    //             // console.log(newdata)
    //             // console.log(newdata.sys.country)
    //         this.setState({
    //             wdata: responseOne.data,
    //             wdataex: responseTwo.data
    //          })
    //         console.log(this.state.wdata)
    //         console.log(this.state.wdataex)
    //         }))
    //         .catch((error) => { // error zaso ne sveti ???//
    //             this.setState({
    //                 wdata: <Error />
    //             })
    //         console.log(this.state.wdata)
    //         })
    // }
    
    render () {
        // if(this.setCity === this.city){
        //     // this.setState({ wdata: <InputCity />})
        //     <h2>ERROR</h2>
        //  }
         if (!this.city) {
    <EnterCity /> /*'Please input a city name'*/
  } else {
    showNewCity(this.city)
  }

   
        let btn_class = this.state.orange ? "orangeButton" : "whiteButton";
        return (
            <React.Fragment>
                <div>
                {/* { JSON.stringify(this.state.wdata)} */}
                {/* {this.state.wdata} */}
               </div>
               <div>
                   <h1 id='wftitle'> Weather Forecast </h1> 
                   <div id='srcleft'>
                       {/* Automatic addin and finishing when typping */}
                        <input 
                        type='text'
                        className='cico' 
                        id='new-city'
                        onChange={this.setCity}
                        placeholder='Enter City' 
                        style={{textAlign:'center'}}
                        />
                        
                        <button id='src-btn' onClick={this.showNewCity}>
                            Get Weather
                        </button>
                   </div>
                   <div id='srcright'>
                        <h2 className='wfcwf'>Current Weather Forecast in: &nbsp; 
                <span style={{color: 'black'}}>
                {this.state.wdata ? this.state.wdata.name + ', ' + this.state.wdata.sys.country : null}
                </span>
                 </h2>
                 {/* <p>{datetime}</p>
                 <p>{time}</p> */}
                 
                        <button id='refresh' /*onClick={this.showNewCity}*/ >
                        Referesh 
                        </button>
                    </div>
                    {/* CLOCK CLASS COMPONENT */}
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
                            {/* <th>Geo Coords</th> */}
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
                           />
                      }
                   
                    {/* {  
                        !this.state.wdata
                        ? < EnterCity />
                        : this.state.wdata && <CurrForecast 
                   temperature={this.state.wdata.main.temp}
                          wind={this.state.wdata.wind.speed}
                    cloudiness={this.state.wdata.clouds.all}
                      pressure={this.state.wdata.main.pressure}
                      humidity={this.state.wdata.main.humidity}
                       sunrise={this.state.wdata.sys.sunrise}
                        sunset={this.state.wdata.sys.sunset} 
                         />
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
                <button  /*id='btn-ext'*/  className={btn_class} onClick={this.ExtFore}> 
                {this.state.btnOpenClose} 
                </button>
                </div>
                    {
                    this.state.show &&  <ExtForecastSec 
                             time={this.state.wdataex.list[0].dt_txt}
                      temperature={this.state.wdataex.list[0].main.temp}
                             wind={this.state.wdataex.list[0].wind.speed}
                       cloudiness={this.state.wdataex.list[0].clouds.all}
                         pressure={this.state.wdataex.list[0].main.pressure}
                         humidity={this.state.wdataex.list[0].main.humidity}
                         /> 
                    }
                
                
            </React.Fragment>
        )
    }
}

export default WForecast