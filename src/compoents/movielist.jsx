import React from "react";
import AddMovie from "./AddMovie";
import { connect } from "react-redux";

import "../styles.css";

const getVisibleMovies = (Films, Findbyname, Findbyrating) => {
  return movieList.filter(
    el =>
      el.title.toLowerCase().includes(Findbyname.toLowerCase()) &&
      el.stars >= Findbyrating
  );
};

let Rate = stars => {
  let starsRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsRating.push(
        <i key={i} className="fas fa-star" style={{ color: "red" }} />
      );
    } else {
      starsRating.push(
        <i key={i} className="fas fa-star" style={{ color: "black" }} />
      );
    }
  }
  return <div>{starsRating}</div>;
};

const MovieList = ({ Films, Findbyrating, Findbyname }) => {
  return (
    <div className="filmlist">
      {getVisibleMovies(movieList, Findbyname, Findbyrating).map(el => (
        <div key={el.id} className="filmborder border border-primary">
          <div>
            <img className="imgfilm" src={el.img} />
            <div className="filmrate border border-primary">
              {Rate(el.stars)}
            </div>
          </div>
          <div className="filmName">
            {el.title} - {el.year}
          </div>
        </div>
      ))}
      <div>
        <AddMovie />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    movieList: state.arr,
    Findbyrating: state.Findbyrating,
    Findbyname: state.Findbyname
  };
};

const List = connect(
  mapStateToProps,
  null
)(MovieList);
export default List;
