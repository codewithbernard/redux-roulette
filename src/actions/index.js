import { NEW_ROLL } from "./types";

export const roll = () => dispatch => {
  const number = Math.floor(Math.random() * 36);
  dispatch({
    type: NEW_ROLL,
    payload: number
  });
};
