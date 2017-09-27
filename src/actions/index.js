import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const SHOW_FORM = 'SHOW_FORM';
export const CLOSE_FORM = 'CLOSE_FORM';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return{
    type: CREATE_POST,
    payload: request
  }
}

export function updatePost (id, values, callback){
  const request = axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, values)
    .then(() => callback());
  return{
    type: UPDATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return{
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return{
    type: DELETE_POST,
    payload: request
  };
}

export function showForm(){
  return{
    type: SHOW_FORM,
  };
}

export function closeForm(){
  return{
    type: CLOSE_FORM,
  };
}
