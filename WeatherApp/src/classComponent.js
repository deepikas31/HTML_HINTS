import React, { Component } from 'react'
import './App.css'
import Test from './Test'

class App extends Component {
  state = { 
    city: 'Mumbai',
    temp: 0,
    country: 'IN',
    visible: false
  }
  componentDidMount(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c0d573b18729da9019711dcbacf8458d&units=metric')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({city: data.name, temp: Math.round(data.main.temp), country: data.sys.country, visible: true})
    })
  }
  render() {
    return (
      <div className="card col-4 mx-auto my-5 bg-image">
        <div className="card-body">
          <h5 className="card-title text-white">{this.state.visible ? this.state.city : 'Loading...'}</h5>
          <Test country={this.state.country} />
          <h1 className="text-white">{this.state.temp}°C</h1>
        </div>
      </div>
    );
  }
}

export default App;