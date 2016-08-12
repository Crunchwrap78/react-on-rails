import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state={ all: [], post: null}, action){
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data};
    default:
      return state;
  }
}
