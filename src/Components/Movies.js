import React from 'react';


class Movies extends React.Component {

  render() {
    return (
      <div>
        <h1>Movies:</h1>

        {this.props.movieData.map(movie => {
          return (
            <div>
              <div>{movie.title}</div>
              <div>{movie.overview}</div>
            </div>
          )
        })}

      </div>

    );
  }
}

export default Movies;
