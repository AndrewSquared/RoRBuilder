import { CALCULATE_POINTS, RESET_POINTS, SET_POINTS } from "../actions/actionPoints";

const initialPoints = 0;

export default function(state = initialPoints, action) {
  switch (action.type) {
    case CALCULATE_POINTS:
      return action.payload;
    case SET_POINTS:
      return action.payload;
    case RESET_POINTS:
      return initialPoints;
    default:
      return state;
  }
}