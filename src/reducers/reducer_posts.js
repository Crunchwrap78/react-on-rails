import { FETCH_POSTS, FETCH_POST, SHOW_FORM, CLOSE_FORM } from '../actions/index';

export default function(state={ all: [], post: null, isOpen: false}, action){
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data};
    case SHOW_FORM:
      return { ...state, isOpen: true};
    case CLOSE_FORM:
      return { ...state, isOpen: false};
    default:
      return state;
  }
}
