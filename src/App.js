import React from 'react';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: []
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

    let cityDataFromAxious = await axios.get(url)
    this.setState({
      cityData: cityDataFromAxious.data[0]
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>City Explorer</h1>
        </header>

        <form className="city-form" onSubmit={this.getCityData}>
          <input placeholder="Choose your city" type="text" onInput={this.handleInput} />
          <button type="submit">Explore!</button>
        </form>

        <Card>
          
          <Card.Title>{this.state.cityData.display_name}</Card.Title>
          <ListGroup.Item>{this.state.cityData.lat}</ListGroup.Item>
          <ListGroup.Item>{this.state.cityData.lon}</ListGroup.Item>
        </Card>
      </div>
    );
  }
}

export default App;
