import React from 'react'
import Weather from './Weather'

const WeatherList = (props) => {
    return props.data.map((element) => {
        return <Weather
            key={element.id}
            lon={element.coord.lon}
            lat={element.coord.lat}
            temp={element.main.temp}
        />
    })
}

export default WeatherList