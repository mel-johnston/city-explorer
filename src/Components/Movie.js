import React from 'react';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return (
      <div className='Movies-card'>
        <Card style={{ margin: '1rem' }} >
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body>{this.props.overview}</Card.Body>
        </Card>
      </div>
    );
  }
}

export default Movie;
