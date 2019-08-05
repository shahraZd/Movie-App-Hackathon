import React, { Component } from "react";
import Find from "./Find";
import List from "./movielist";
import "../styles.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      findstars: 1,
      titleFilter: "",
      movielist: []
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Find />
        <div className="filmlist">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
