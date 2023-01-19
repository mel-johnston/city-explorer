import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class WeatherDay extends React.Component {
  render() {
    return (
      <Accordion className="Weather" defaultActiveKey="0">
            <Accordion.Item eventKey={this.props.counter}>
              <Accordion.Header>{this.props.dateTime}</Accordion.Header>
              <Accordion.Body>High Temp: {this.props.highTemp} F</Accordion.Body>
              <Accordion.Body>Low: {this.props.lowTemp} F</Accordion.Body>
              <Accordion.Body>{this.props.description}</Accordion.Body>
            </Accordion.Item>
      </Accordion>

    );
  }
}

export default WeatherDay;
