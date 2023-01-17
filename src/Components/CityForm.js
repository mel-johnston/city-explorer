import React from 'react';
import Card from 'react-bootstrap/Card';


class CityForm extends React.Component {

  render() {
    return (
      <div>
        <form className="city-form" onSubmit={this.props.getCityData}>
          <input placeholder="Choose your city" type="text" onInput={this.props.handleInput} />
          <button type="submit">Explore!</button>
        </form>
        {this.props.displayMap === true &&
          <Card className="map-card"style={{ width: "50%", margin: "0 auto" }}>
            <Card.Body>
              <Card.Title>{this.props.cityData.display_name}</Card.Title>
              <Card.Text>Lat: {this.props.cityData.lat} Long: {this.props.cityData.lon}</Card.Text>
            </Card.Body>
            <Card.Img src={this.props.cityMap} alt="city map" />
          </Card>}
      </div>
    );
  }
}

export default CityForm;