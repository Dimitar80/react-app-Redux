import React from 'react'
import axios from 'axios'
import Error from './Error'
import './style.css'
import './shared.css'


class CurrForecastTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wdata : null,
            error: null,
        }
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
            console.log(this.state.wdata.main)
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
                        <tr>
                           <td>{this.state.wdata.main.temp}</td>
                           <td>{this.state.wdata.wind.speed}</td>
                           <td>{this.state.wdata.clouds.all}</td>
                           <td>{this.state.wdata.main.pressure}</td>
                           <td>{this.state.wdata.main.humidity}</td>
                           <td>{this.state.wdata.sys.sunrise}</td>
                           <td>{this.state.wdata.sys.sunset}</td>
                        </tr>
                        }
                          
            </React.Fragment>
        )
    }
}

export default CurrForecastTest



