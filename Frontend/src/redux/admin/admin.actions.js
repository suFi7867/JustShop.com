// Product actions here

import axios from "axios";
import {
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
} from "./admin.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_ADMIN = () => async (dispatch) => {
  dispatch({ type: GET_ADMIN_LOADING });
  // console.log("data")
  try {
    let res1 = await axios.get("http://localhost:8080/carts");
    let res2 = await axios.get("http://localhost:8080/users");

    let data = { carts: res1.data, users: res2.data };

    console.log(data);

    return dispatch({ type: GET_ADMIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ADMIN_ERROR, payload: err.message });
  }
};
