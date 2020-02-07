import { FETCH_DATA, UPDATE_BEER, SET_ERROR } from "../actions/actions";

const initialState = {
  beer: [],
  isFetchingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        beer: []
      };
    case UPDATE_BEER:
      return {
        ...state,
        beer: action.payload,
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
