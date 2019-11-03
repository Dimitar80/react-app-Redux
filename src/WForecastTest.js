import React from 'react'
// import axios from 'axios'
import CurrForecast from './CurrForecast'
import ExtForecast from './ExtForecast'
import Clock from './Clock'
import './shared.css'
import './style.css'
// import CurrForecast from './CurrForecast'
import CurrForecastTest from './CurrForecastTest'
// import Error from './Error'

class WForecastTest extends React.Component {
    constructor (props) {
        super(props)
        /*Initial State*/ 
        this.state = {
            show: false,
            wdata:null,
         // wdata: [],{},
            // array: [],
            city: '',
            btnRef: "Refresh",
            btnOpenClose: "Open",
            error: null,
            orange: true,
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
// End - On SEARCH BUTTON //


    render () {

        let btn_class = this.state.orange ? "orangeButton" : "whiteButton";
        return (
            <React.Fragment>
                {/* COULD BE HEADER COMPONENT */}
               <div>
                   <h1 id='wftitle'>Weather Forecast </h1> 
                   <div id='srcleft'>
                       {/* Automatic addin and finishing when typping */}
                        <input 
                        id='new-city'
                        className='cico' 
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
                    {/* CLOCK CLASS COMPONENT */}
                    <div style={{textAlign: 'center'}}><Clock /></div>
               </div>
               <div id='wapp-container'>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th>Temperature</th>
                            <th>Wind</th>
                            <th>Cloudiness</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                            <th>Sunrise</th>
                            <th>Sunset</th>
                        </tr>
                    </thead>
                    <tbody className="products-table-body">
                     <CurrForecastTest />
                      
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
                {this.state.show &&  <ExtForecast 
                /*r={this.state.wdata.name}*/ /> }
            </React.Fragment>
        )
    }
}

export default WForecastTest