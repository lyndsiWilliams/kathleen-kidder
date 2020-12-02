import axios from 'axios';
// Destructure the command names to avoid typos in the reducer
// GET
export const FETCH_BLOGS_START = "FETCH_BLOGS_START";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_FAILURE = "FETCH_BLOGS_FAILURE";
// POST
export const ADD_BLOG_START = "ADD_BLOG_START";
export const ADD_BLOG_SUCCESS = "ADD_BLOG_SUCCESS";
export const ADD_BLOG_FAILURE = "ADD_BLOG_FAILURE";
// PUT
export const EDIT_BLOG = "EDIT_BLOG";
// DELETE
export const DELETE_BLOG = "DELETE_BLOG";


export const getBlogs = () => dispatch => {
  dispatch({ type: FETCH_BLOGS_START });
  axios.get("https://reqres.in/api/users?page=2")
      .then(response => {
        dispatch({ type: FETCH_BLOGS_SUCCESS, payload: response.data.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: FETCH_BLOGS_FAILURE, payload: error });
      });
};