import React, { Component } from "react";
import "./App.css";
import { Poster } from "./Movie";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKPOSTER_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="poster">
        <MovieWrapper backdrop={`${BACKPOSTER_PATH}${movies.backdrop_path}`}>
          <MovieInfo>
            <Overdrive id={movies.id}>
              <Poster
                src={`${POSTER_PATH}${movies.poster_path}`}
                alt={movies.title}
              />
            </Overdrive>
            <h1>{movies.title}</h1>
            <h3>{movies.release_date}</h3>
            <p>{movies.overview}</p>
          </MovieInfo>
        </MovieWrapper>
      </div>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: inline-block;
  color: #111;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5 rem;
  }
`;
