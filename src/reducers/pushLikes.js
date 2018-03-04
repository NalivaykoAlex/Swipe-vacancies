import { PUSH_LIKES } from "../constants";

const initialState = {};

export default function likes(state = initialState, action) {
  if (action.type === PUSH_LIKES) {
    return [...state, action.likes];
  }
  return state;
}
