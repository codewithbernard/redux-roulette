import { NEW_ROLL } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case NEW_ROLL:
      return action.payload;
    default:
      return state;
  }
};
