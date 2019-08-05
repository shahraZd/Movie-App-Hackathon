import React from "react";
import TitleFilter from './components/TitleFilter';
import RatingFilter from './components/RatingFilter';
import MovieList from './components/MovieList';
//import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddCard from './components/AddCard';

// class movieApp extends 
// componentWillMount() {
//   setTimeout(() => {
//     this.setState({
//       load: true
//     });
//   }, 3000);
// }

// getVisibleMovies() {
//   return this.state.movies.filter(
//     el =>
//       el.rating >= this.state.minRatingFilter &&
//       el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim())
//   )
// }

//render() {
// if (!this.state.load)
//   return (
//     <Spinner animation="border" role="status">
//       <span className="sr-only">Loading...</span>
//     </Spinner>
//   );
// else
const MovieApp = () => (
  <BrowserRouter>
    <div className="movie-app">

      <header className="header">
        <div className="d-flex justify-content-around mt-3">
          <Link to="/movielist"> <div className="btn btn-primary">movielist</div></Link>
          <div><TitleFilter /></div>
          <div><RatingFilter /></div>
        </div>
      </header>
      <main className="movie-app-main">

        <Route exact path="/movielist" component={MovieList} />
        <Route exact path="/add" component={AddCard} />
        <Route exact path="/return" component={MovieList} />

      </main>
    </div>
  </BrowserRouter>
)

export default MovieApp;

