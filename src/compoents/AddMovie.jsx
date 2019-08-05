import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import { addFilm } from "../actions/index";

class NewMovie extends Component {
  constructor() {
    super();
    this.state = {
      addfilmname: "",
      addfilmyear: "",
      addfilmimg: "",
      addfilmrate: "",
      open: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    let n = this.state.addfilmname;
    let y = this.state.addfilmyear;
    let i = this.state.addfilmimg;
    let r = this.state.addfilmrate;
    let iddd = 10;
    if (i === "") {
      i =
        "https://www.greatplacetowork.ca/templates/gptw/images/no-image-available.jpg";
    }

    iddd++;
    this.props.addFilm({ id: iddd, title: n, year: y, img: i, stars: r });
    this.setState({
      addfilmname: "",
      addfilmyear: "",
      addfilmimg: "",
      addfilmrate: "",
      open: false
    });

    event.preventDefault();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.onOpenModal}
          className="btn btn-primary"
          style={{ margin: "100px" }}
        >
          New Movie
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <form onSubmit={this.handleSubmit} className="formnewmovie">
            <input
              type="text"
              placeholder="Name"
              name="addfilmname"
              value={this.state.addfilmname}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Year"
              name="addfilmyear"
              value={this.state.addfilmyear}
              onChange={this.handleChange}
            />

            <input
              type="text"
              placeholder="Rate"
              name="addfilmrate"
              value={this.state.addfilmrate}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="img url"
              name="addfilmimg"
              value={this.state.addfilmimg}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFilm: movie => dispatch(addFilm(movie))
  };
}

const ADD_MOVIE = connect(
  null,
  mapDispatchToProps
)(NewMovie);
export default ADD_MOVIE;
