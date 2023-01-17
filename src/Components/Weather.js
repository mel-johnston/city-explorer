import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


class Weather extends React.Component {

  render() {
    return (
        <Accordion className="Weather" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{this.props.weatherDateOne}</Accordion.Header>
            <Accordion.Body>{this.props.weatherTypeOne}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{this.props.weatherDateTwo}</Accordion.Header>
            <Accordion.Body>{this.props.weatherTypeTwo}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{this.props.weatherDateThree}</Accordion.Header>
            <Accordion.Body>{this.props.weatherTypeThree}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

    );
  }
}

export default Weather;

