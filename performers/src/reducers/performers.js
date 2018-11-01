import { FETCH_PERFORMERS } from "../actions/types";

export const initialState = {
  performers: []
};

const performerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERFORMERS:
      return { ...state, performers: action.data };
    default:
      return state;
  }
};

export default performerReducer;
