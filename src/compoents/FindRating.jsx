import React from "react";
import { connect } from "react-redux";
import { filterByStars } from "../actions";

class FindRating extends React.Component {
  constructor({ Findbyratings }) {
    super();
    this.state = {
      Findbyratings
    };
    console.log("constructor");
  }

  render() {
    let starsRating = [];
    for (let i = 0; i < 5; i++) {
      if (i < this.props.Findbyratings) {
        starsRating.push(
          <span
            key={i}
            onClick={() => {
              this.props.filterByStars(i + 1);
            }}
          >
            <i className="fas fa-star" style={{ color: "red" }} />
          </span>
        );
      } else {
        starsRating.push(
          <span
            key={i}
            onClick={() => {
              this.props.filterByStars(i + 1);
            }}
          >
            <i className="fas fa-star" style={{ color: "black" }} />
          </span>
        );
      }
    }

    return <div className="ml-5  mt-3">{starsRating}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterByStars: newstarts => dispatch(filterByStars(newstarts))
  };
}
const mapStateToProps = state => {
  return {
    Findbyratings: state.Findbyrating
  };
};

const FindByRating = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindRating);

export default FindByRating;
