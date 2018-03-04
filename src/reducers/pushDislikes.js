import { PUSH_DISLIKES } from "../constants";

const initialState = {};

export default function dislikes(state = initialState, action) {
  if (action.type === PUSH_DISLIKES) {
    return [...state, action.dislikes];
  }
  return state;
}
