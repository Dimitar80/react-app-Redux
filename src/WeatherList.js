import React from 'react'
import Weather from './Weather'

const WeatherList = (props) => {
    return props.data.map((element) => {
        return <Weather
            key={element.id}
            id={element.id}
            name={element.name}
            country={element.country}
        />
    })
}

export default WeatherList