import { FETCH_DATA, UPDATE_BEERS, SET_ERROR } from "../actions/actions";

const initialState = {
  missions: [],
  isFetchingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        missions: []
      };
    case UPDATE_BEERS:
      return {
        ...state,
        missions: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
