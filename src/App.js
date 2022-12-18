import './App.css';
import Frontapp from './Components/frontApp/frontapp.js'
import React, {Component} from 'react'

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = { 
    main: [],
    coord: '',
    isFetching: false
  }
  this.fetchData = this.fetchData.bind(this)
}

   fetchData = () => {
    const that = this
    let location = 'London';
    let key = 'fd3b081fa5f1791533d9fa25f99be333';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + key  )
    .then(res => {
      return res.json();
    })
    .then((res) => {
      console.log(res)
      that.setState({
        main: res.main,
        isFetching: true
      });
    })
    .catch(err => console.log(err))

  }
    componentDidMount() {
      this.fetchData()
    }

  


  render() {
   let data =  Array.from(this.state.main)
  return (
    <div className="App">
    <Frontapp/>
    <div>
      {data.map(value => {
        <p key={value}>{value.temp}</p>
      })}
    </div>
    
    {/*  
    #1 Create input + Text for forecast
    #2 Add fetch from API for data.
    #3 Data from Api are Current Day, Next Day, Two Days, 
    Tree Days, Humidity, Wind Speed, Hours, Date, Year.
    #4 Create charts for display data more beautiful.
    */}
    </div>
    );
  }
}

export default App;
