import {
  ADD_MOVIE,
  FIND_NAME,
  FIND_RATING,
  DELETE_MOVIE
} from "../const/actionTypes";

export function ADD_MOVIE() {
  return { type: ADD_MOVIE, payload };
}

export function DELETE_MOVIE() {
  return { type: DELETE_MOVIE, payload };
}

export function filterByStars(payload) {
  return { type: FIND_RATING, payload };
}

export function filterByName(payload) {
  return { type: FIND_NAME, payload };
}
