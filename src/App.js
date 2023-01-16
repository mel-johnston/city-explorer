import React from 'react';
import './App.css';
import axios from 'axios';
import CityForm from './Components/CityForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {}
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;

    let cityData = await axios.get(url)

    this.setState({
      cityData: cityData.data[0],
      cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&markers=${cityData.data[0].lat},${cityData.data[0].lon}&size=500x500&zoom=10&markers=icon:large-green-cutout`
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>City Explorer</h1>
        </header>
        <CityForm
          cityData={this.state.cityData}
          handleInput={this.handleInput}
          getCityData={this.getCityData}
          cityMap={this.state.cityMap}
        />
      </div>
    );
  }
}

export default App;
