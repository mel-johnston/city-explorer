import React from 'react';
import './App.css';
import axios from 'axios';
import CityForm from './Components/CityForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      displayMap: false,
      isError: false,
      errorMessage: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    try {
      e.preventDefault();
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(url)
      this.setState({
        cityData: cityData.data[0],
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&markers=${cityData.data[0].lat},${cityData.data[0].lon}&size=500x500&zoom=10&markers=icon:large-green-cutout`,
        displayMap: true,
        isError: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        displayMap: false,
        isError: true,
        errorMessage: error.response.status
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
        <div className='error-message'>

          {this.state.isError === true &&
            <img alt="{this.state.errorMessage}" src={`https://httpcats.com/${this.state.errorMessage}.jpg`} />
          }
        </div>
      </div>
    );
  }
}

export default App;
