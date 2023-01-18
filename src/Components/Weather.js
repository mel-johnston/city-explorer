import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

let counter = -1;

class Weather extends React.Component {

  render() {
    return (
      <Accordion className="Weather" defaultActiveKey="0">

        {this.props.weatherData.map(day => {
          counter++;
          return (
            <Accordion.Item eventKey={counter}>
              <Accordion.Header>{day.dateTime}</Accordion.Header>
              <Accordion.Body>High Temp: {day.highTemp} F</Accordion.Body>
              <Accordion.Body>Low: {day.lowTemp} F</Accordion.Body>
              <Accordion.Body>{day.description}</Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>

    );
  }
}

export default Weather;

