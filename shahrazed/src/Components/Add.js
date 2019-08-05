import React from "react";
import { connect } from "react-redux";
import { add } from "../redux/action";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div className="d-flex w-50 mx-4 ">
        <input
          type="text"
          onChange={e =>
            this.setState({
              inputValue: e.target.value
            })
          }
          className="form-control h-25 m-1 "
          placeholder="I wanna do ..."
        />
        <button
          type="button"
          onClick={() => this.props.ajouter(this.state.inputValue)}
          className="btn btn-primary h-25 m-1"
        >
          ADD
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ajouter: x => dispatch(add(x))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Add);
