import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let token = localStorage.getItem("token");
const initialState = {
  isAuth: false,
  token: token,
  loading: false,
  error: false,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false,
      };
    }
    case LOGIN_ERROR: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage:payload
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
