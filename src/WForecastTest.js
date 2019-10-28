import React from 'react'
import axios from 'axios'
import './shared.css'
import './style.css'
// import CurrForecast from './CurrForecast'
import Error from './Error'

class WForecastTest extends React.Component {
    constructor (props) {
        super(props)
        /*Initial State*/ 
        this.state = {
            show: false,
            wdata: null,
         // wdata: [],
            array: [],
            show: false,
            error: null
        }
    }

    showOrHide = (event) => {
        console.log(event.target.id)
        /* menuvanje na state so setState() metoda
        otkako state-ot kje se smeni,
        komponentata si go vika svojot render metod odnovo
        (ASINHRONA E, PAZETE! noviot state moze da go procitate
            samo vo render i so callback) */
        this.setState({ show: !this.state.show });

        console.log("Button clicked...")
        let buttonText = this.state.buttonText === "Refresh" ? "Refreshed" : "Refresh"
        this.setState({buttonText: buttonText});
        
        // let newColor = this.state.color === green ? yellow : green
        // this.setState({color: newColor});
    
    }

    // expand = (event) => {
    //     this.setState({ show: !this.state.show })
    //     console.log(event.target)
    //     console.log(this.state.array[event.target.id -1] )
    // }

    componentDidMount () {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`)
            .then((response) => {
                console.log(response.data)
                console.log(response.data.name)
                // const new_data = JSON.stringify(response.data) 
                // const new_data = response.data
                // const new_data = response.data.JSON.parse()
                // this.setState({ users: Object.values(JSON.parse(res.data))});
                const new_data = response.data
                console.log(new_data)
                console.log(new_data.sys.country)
                // const new_data = response.data.map((el) => {
                //     console.log(new_data)
                //     return <CurrForecast 
                //                   key={el.id}  
                //              cityName={el.name}
                //           countryName={el.sys.country}
                //             />
                // })
                
                // console.log(this.cityName)
                // console.log(new_data)
                // array.push[new_data]
                // return <Forecast  
                //          minTemp={new_data.temp_min}
                // />
                // new_data.map((item) => {
                    
                //     return <CurrForecast 
                                
                //                 expand={this.expand}/>
                // })
    
            this.setState({wdata: new_data, array: response.data})
            console.log(this.state.wdata.name)
            //  console.log(response.data)
            //  console.log(new_data)
            //  console.log(this.state.array)
            })
            .catch((error) => { // error zaso ne sveti ???//
                this.setState({wdata: <Error />})
            })
    }
    

    render () {

    
        return (
            <React.Fragment>
                <div>
                {/* { JSON.stringify(this.state.wdata)} */}
                {this.state.wdata}
               </div>
               <div>
                   <h1 id='wftitle'>Weather Forecast</h1>
                   <div id='srcleft'>
                        <input id='cico' placeholder='Enter City' style={{textAlign:'center'}}/>
                        <button id='src-btn' onClick={this.showNewTown}>Search</button>
                        </div>
                   
                        <div id='srcright'>
                        <h2 id='wfcwf'>Current Weather Forecast</h2>
                        <button id='refresh' 
                        onClick={this.showOrHide} /*style={{backgroundColor:this.state.newColor}}*/>
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
                         {/* <CurrForecast 
                                key={this.props.id}
                           cityName={this.props.cityName}
                        countryName={this.props.countryName} /> */}

                    { 
                        !this.state.wdata 
                        ?<tr> 
                            <td>LOADING ...</td>
                        </tr>
                        : this.state.wdata
                    }
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        )
    }
}

export default WForecastTest