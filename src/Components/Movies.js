import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {
    return (
      <div className='Movies-card'>
        {this.props.movieData.map(movie => {
          return (
            <Card style={{ margin: '1rem' }} >
              <Card.Title>{movie.title}</Card.Title>
              <Card.Body>{movie.overview}</Card.Body>
            </Card>
          )
        })}

      </div>

    );
  }
}

export default Movies;
