import {
  FETCH_BLOGS_START,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
} from '../actions';

const initialState = {
  blogs: [],
  error: '',
  isFetching: false
};


export function blogReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
        error: '',
        isFetching: false
      };
    case FETCH_BLOGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  };
};