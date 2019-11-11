import React from 'react'
import axios from 'axios'
import './shared.css'
import './style.css'
import CurrForecast from './CurrForecast'
// import CurrForecastTest from './CurrForecastTest'
// import ExtForecast from './ExtForecast'
import ExtForecastSec from './ExtForecastSec'
import Clock from './Clock'
// import Error from './Error'
import ErrorTess from './ErrorTess'
// import EnterCity from './EnterCity'
// import InputCity from './InputCity'
import ReactTooltip from 'react-tooltip'
import ExtForErr from './ExtForErr'



// let time = new Date().toLocaleString();
// let currentdate = new Date(); 
//     let datetime = currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + ", "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ':'
//                 + currentdate.getSeconds()

class WForecastA extends React.Component {
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
            message: null,
            dir: null,
            error: null,
            orange: true,
            // wdataexEntered: false
        }
    }

    CloseBtn = (event) => {
        console.log(event.target.id)
        this.setState({ error: null });
        // console.log("Button clicked...")
        // let buttonText = this.state.buttonText === "Expand" ? "Cancel" : "Expand"
        // this.setState({buttonText: buttonText});
    }
    /*saveInput*/ setCity = (event) => {
        // let val = this.state.city ===  event.target.value ? 'error' : event.target.value
        // this.setState({city: val})
        this.setState({city: event.target.value})
        console.log({city: event.target.value})
    }
     

    capFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
        
    }

    keyPress = (event) => {
        if (event.key === "Enter") {
          this.showNewCity()
        }
    }


    // onClick f-ja za Show Extended Weather Forecast in: //
    ExtFore = (event) => {
        // event.preventDefault()
          console.log(event.target.id)
       
        console.log("Button clicked...")
        let msg = this.state.message === null ? 'PLEASE ENTER CITY IN THE ABOVE INPUT FIELD' : null
        let butText = this.state.btnOpenClose === "Open" ? "Close" : "Open"
        let newCity = this.state.city
        if(newCity){
            this.setState({ show: !this.state.show });
            this.setState({ orange: !this.state.orange })
            this.setState({ btnOpenClose: butText });
        // axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ newCity +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
        //     .then((responseTwo ) => {
        //         console.log(responseTwo.data)
        //     this.setState({
        //         wdataex: responseTwo.data,
        //         })
        //     console.log(this.state.wdataex)
        //     })
        // .catch((error) => {
        //     console.log(error)
        //     this.setState({error: /*this.state.show && */ <ErrorTess />})
        // })
      } console.log('ERR');
      this.setState({message: msg})
      // Mora da e na soodvetno mesto --- < ExtForErr />
} 

     
   // Start - On SEARCH BUTTON //
    showNewCity = () => {
        // let newCity = this.capFirstLetter(this.state.city)
        let newCity = this.state.city
        document.getElementById('new-city').value = null
        let wrd = this.state.dir === null ? 'PLEASE ENTER CITY IN THE ABOVE INPUT FIELD' : null
        if(newCity){
        console.log(newCity)
        
        //  document.getElementById('extfield').innerHTML = 'extfield'
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
            // this.setState({error: /*this.state.show && */ <ErrorTess />})
            this.setState({error: <ErrorTess cl={this.CloseBtn} />} )
        })
    } else {
        // alert('Please Input City')
        this.setState({dir: wrd})
        console.log('Please enter city')
        // {<ReactTooltip place='right' type='warning' effect='solid' />}
    }
}
    
    render () {
       
        let btn_class = this.state.orange ? "orangeButton" : "whiteButton";

        return (
            <React.Fragment>
                <div>
               </div>
               <div>
                   <h1 id='wftitle'> Weather Forecast </h1> 
                   <div id='srcleft'>
                       {/* Automatic addin and finishing when typping */}
                        <input 
                        type='text'
                        // value="proba"
                        className='cico' 
                        id='new-city'
                        onChange={this.setCity}
                        onKeyUp={this.keyPress}
                        placeholder='Enter City' 
                        style={{textAlign:'center'}}
                        />
                        
                        <button type='submit' id='src-btn' onClick={this.showNewCity}>
                            Get Weather
                        </button>
                        {this.state.error}
                        {/* {this.state.error ? <ErrorTess /> : null } */}
                        {/* <h2>K {this.state.wdata ? this.setCity : ''} </h2> */}
                        </div>
                   <div id='srcright'>
                        <h2 className='wfcwf'>Current Weather Forecast in: &nbsp; 
                <span style={{color: 'black'}}>
                {/* {this.state.wdata ? this.state.wdata.name + ', ' + this.state.wdata.sys.country : null} */}
                {this.state.wdata ? this.state.wdata.name + ', ' + this.state.wdata.sys.country : this.state.dir
                /*null*/ 
                /*< ExtForErr />*/}
                </span>
                 </h2>
                 {/* <p>{datetime}</p>
                 <p>{time}</p> */}
                 
                        <button id='refresh' onClick={this.showNewCity} > 
                        Referesh 
                        </button>
                    </div>
                    {/* CLOCK CLASS COMPONENT */}
                    <div style={{textAlign: 'center'}}>
                           {this.state.wdata && <Clock  
                           city={this.state.wdata.name}
                           country={this.state.wdata.sys.country} />
                           }
                    </div>
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
                             name = {'TESTIS'}
                              city={this.state.wdata.name}
                           country={this.state.wdata.sys.country}
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
                <h2 id ='secExt' className='wfcwf'>Show Extended Weather Forecast in: &nbsp; 
                <span style={{color: 'black'}}>
                {this.state.wdata ? this.state.wdata.name + ', ' + this.state.wdata.sys.country : this.state.message
                /*null*/ 
                /*< ExtForErr />*/}
                </span> 
                 </h2> &nbsp; 
                <button  id='btn-ext'  className={btn_class} onClick={this.ExtFore}> 
                {this.state.btnOpenClose}
                  </button> 
                </div>
                    {/* {  
                    this.state.wdataex ? this.state.show &&  <ExtForecastSec 
                             time={this.state.wdataex.list[0].dt_txt}
                      temperature={this.state.wdataex.list[0].main.temp}
                             wind={this.state.wdataex.list[0].wind.speed}
                       cloudiness={this.state.wdataex.list[0].clouds.all}
                         pressure={this.state.wdataex.list[0].main.pressure}
                         humidity={this.state.wdataex.list[0].main.humidity}
                         />   : < ExtForErr />
                    } */}
                    {  
                    this.state.wdataex && this.state.show &&  <ExtForecastSec 
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

export default WForecastA