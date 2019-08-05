import React from "react";
import { filterByName } from "../actions/index";
import { connect } from "react-redux";

import "../styles.css";

class find extends React.Component {
  render() {
    return (
      <div class="search-block">
        <input
          type="search"
          placeholder="type a movie name "
          onChange={e => {
            this.props.filterByName(e.target.value);
          }}
        />
        <div class="icon" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterByName: film => dispatch(filterByName(film))
  };
}

const Find = connect(
  null,
  mapDispatchToProps
)(find);
export default Find;
