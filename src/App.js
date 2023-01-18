import React from 'react';
import './App.css';
import axios from 'axios';
import CityForm from './Components/CityForm';
import Error from './Components/Error';
import Weather from './Components/Weather';
import Movies from './Components/Movies';

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
      weatherData: {},
      movieData: {},
      movieResponse: false
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getWeather = async (lat, lon) => {
    try {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}&lat=${lat}&lon=${lon}`);
      this.setState({
        weatherData: weatherData.data,
        weatherResponse: true
      })
    } catch (error) {
      this.setState({
        isError: true,
        errorMessage: error.message,
      })
    }
  }

  getMovies = async () => {
    try {
      let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movie?city_name=${this.state.city}`);
      
      this.setState({
        movieData: movieData.data,
        movieResponse: true
      })
    } catch (error) {
      this.setState({
        isError: true,
        errorMessage: error.message
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
      });
      // this.getWeather(cityData.data[0].lat, cityData.data[0].lon);
      this.getMovies();

    } catch (error) {
      console.log(error);
      this.setState({
        displayMap: false,
        isError: true,
        errorMessage: error.message,
        errorNumber: error.response.status,
      })

    }
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
            weatherData={this.state.weatherData}
          />
        }
        {this.state.movieResponse === true &&
          <Movies
            movieData={this.state.movieData}
          />}

      </div>
    );
  }
}

export default App;
