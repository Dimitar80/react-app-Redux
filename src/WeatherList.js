import React from 'react'
import Weather from './Weather'

const WeatherList = (props) => {
    return props.data.map((element) => {
        console.log(element)
        return <Weather
            key={element.id}
            press={element.main.pressure}
            hum={element.main.humidity}
            temp={element.main.temp}
            
        />
        
    })
    
}
// console.log(press)

export default WeatherList