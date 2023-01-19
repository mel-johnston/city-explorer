import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return (
      <div className='Movies-card'>
        {this.props.movieData.map(movie => {
          return (
            <Movie
              title={movie.title}
              overview = {movie.overview}
            />
          )
        })}
      </div>
    );
  }
}

export default Movies;
