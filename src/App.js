import React from 'react';
import './App.css';
import axios from 'axios';
import CityForm from './Components/CityForm';
import Error from './Components/Error';
import Weather from './Components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      displayMap: false,
      isError: false,
      errorMessage: '',
      errorNumber: '',
      weatherResponse: false,
      weatherData: {}
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getWeather = async (e) => {
    try {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}`);
      this.setState({
        weatherDateOne: weatherData.data.dateTimeOne,
        weatherTypeOne: weatherData.data.descriptionOne,
        weatherDateTwo: weatherData.data.dateTimeTwo,
        weatherTypeTwo: weatherData.data.descriptionTwo,
        weatherDateThree: weatherData.data.dateTimeThree,
        weatherTypeThree: weatherData.data.descriptionThree,
        weatherResponse: true
      })
    } catch (error) {
      this.setState({
        isError: true,
        errorMessage: error.message,
      })
    }
  }

  getCityData = async (e) => {
    try {
      e.preventDefault();
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(url)
      this.setState({
        cityData: cityData.data[0],
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&markers=${cityData.data[0].lat},${cityData.data[0].lon}|icon:tiny-green-cutout&size=500x500&zoom=10`,
        displayMap: true,
        isError: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        displayMap: false,
        isError: true,
        errorMessage: error.message,
        errorNumber: error.response.status,
      })

    }
    this.getWeather()
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>City Explorer</h1>
        </header>
        <CityForm
          displayMap={this.state.displayMap}
          cityData={this.state.cityData}
          handleInput={this.handleInput}
          getCityData={this.getCityData}
          cityMap={this.state.cityMap}
        />

        <Error
          getCityData={this.getCityData}
          isError={this.state.isError}
          errorMessage={this.state.errorMessage}
          errorNumber={this.state.errorNumber}
        />
        {this.state.weatherResponse === true &&
          <Weather
            getWeather={this.getWeather}
            weatherData={this.state.weatherData}
            weatherDateOne={this.state.weatherDateOne}
            weatherTypeOne={this.state.weatherTypeOne}
            weatherDateTwo={this.state.weatherDateTwo}
            weatherTypeTwo={this.state.weatherTypeTwo}
            weatherDateThree={this.state.weatherDateThree}
            weatherTypeThree={this.state.weatherTypeThree}
          />
        }

      </div>
    );
  }
}

export default App;
