import React from 'react'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <p className="App-clock">
          The current date and time in 
          <span style={{color: 'lightgrey', fontFamily: 'Roboto, sans-serif'}} > {this.props.city + ', ' + this.props.country} </span>
          is:  {this.state.time}.
        </p>
      );
    }
  }

  export default Clock