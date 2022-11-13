// Product actions here

import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_PRODUCTS = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  // console.log("data")
  try {
    let res1 = await axios.get("https://sample-backend-cvar.onrender.com/mens");
    let res2 = await axios.get("https://sample-backend-cvar.onrender.com/womens");
    let res3 = await axios.get("https://sample-backend-cvar.onrender.com/electronics");

    let data = { mens: res1.data, womens: res2.data, electronics: res3.data };

    //console.log(data)

    return dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
  }
};
