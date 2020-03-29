import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    //* My Method
    // return movieData.map(
    //   movie =>
    //     <MovieCard movieData={movie} title={movie.title} />
    // )
    //* Solutions Method
    return movieData.map((movie, index) => <MovieCard
      key={index}
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
    />)

  }

  render() {
    return (
      <div id="movie-showcase">

        {this.generateMovieCards()}
      </div>
    )
  }
}
