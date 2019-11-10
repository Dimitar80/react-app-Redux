import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Menu from './Menu'
import TestMenu from './TestMenu'
import MenuChLi from './MenuChLi'
import Wrapper from './Wrapper'
import UsersList from './UsersList'
// import WeatherList from './WeatherList'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './shared.css'
import WForecastA from './WForecastA'
import WForecast from './WForecast'
import WForecastTest from './WForecastTest'







const About = () => {
    return (<h1>Welcome to my about page!</h1>)
}

const Contact = () => {
    return (<h1>Welcome to my contact page!</h1>)
}

const Routes = () => {
    return (
        <Router>
            <MenuChLi />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route
                    exact
                    path='/user'
                    render={ () =>
                        <Wrapper
                            component={UsersList}
                            methodType='GET'
                            url='https://jsonplaceholder.typicode.com/users'
                        />
                    }
                />
                <Route exact path='/weather' component={WForecastA} />
                {/* <Route
                    exact
                    path='/weather'
                    render={ () =>
                        <Wrapper
                            component={WeatherList}
                            methodType='GET'
                            url='https://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=9bde6170317af476e9c47e6d11cc9d26'
                        />                                                                 
                    }
                /> */}
               
            </Switch>
        </Router>
    )
}

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, app)

/* const Container = () => {
    return  (
        <React.Fragment>
            <User />
            <Heading />
        </React.Fragment>
    )
} */

