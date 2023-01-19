import React from 'react';
import WeatherDay from './WeatherDay';

let counter = -1;

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map(day => {
          counter++
          return (
            <WeatherDay
              counter={counter}
              dateTime={day.dateTime}
              highTemp={day.highTemp}
              lowTemp={day.lowTemp}
              description={day.description}
            />
          )
        })}
      </div>

    );
  }
}

export default Weather;
