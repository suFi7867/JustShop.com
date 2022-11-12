import {
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
} from "./admin.types";

// Note: Do not update/change the initial state
const adminInitalState = {
  loading: false,
  error: false,
  data: { carts: [], users: [] },
};

export const adminReducer = (state = adminInitalState, { type, payload }) => {
  switch (type) {
    case GET_ADMIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_ADMIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case GET_ADMIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
