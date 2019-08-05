import {
  ADD_MOVIE,
  FIND_NAME,
  FIND_RATING,
  DELETE_MOVIE
} from "./actions/actionTypes.js";

import { movielist } from "./const/data";

const initialState = {
  movielist: movielist,
  Findbyrating: 1,
  Findbyname: ""
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE) {
    return Object.assign({}, state, {
      movielist: state.movielist.concat(action.payload)
    });
  }
  if (action.type === FIND_NAME) {
    return Object.assign({}, state, {
      Findbyname: action.payload
    });
  }
  if (action.type === DELETE_MOVIE) {
    return Object.assign({}, state, {
      Findbyname: action.payload
    });
  }

  if (action.type === FIND_RATING) {
    return Object.assign({}, state, {
      Findbyrating: action.payload
    });
  }
  return state;
}
export default rootReducer;
