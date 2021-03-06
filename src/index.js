import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Menu from './Menu'
import TestMenu from './TestMenu'
import MenuChLi from './MenuChLi'
import WrapperHOC from './WrapperHOC'
import UsersList from './UsersList'
import User from './User'
// import WeatherList from './WeatherList'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './shared.css'
import WForecastA from './WForecastA'
import Table from './Table'
import TableOne from './TableOne'
// import UsersListCls from './UsersListCls.js'
// import WForecast from './WForecast'
// import WForecastTest from './WForecastTest'







const About = () => {
    return (
    <div className='compHead'>
        <h1>Welcome to my about page!</h1>
        </div>
        )
}

const Contact = () => {
    return (
    <div className='compHead'>
    <h1>Welcome to my contact page!</h1>
        </div>
        )
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
                {/* <Route
                    exact
                    path='/user'
                    render={ () =>
                        <Table
                            // component={UsersList}
                        />
                    }
                /> */}
                <Route exact path='/user' component={TableOne} />
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

