import * as types from "./actionType";

const intialState = {
  isLoading: false,
  isError: false,
  data: [],
  cart: [],
};

export const appReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.ADD_DATA_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.CART_DATA_LOADING: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case types.CART_DATA_SUCCESS: {
        return {
          ...state,
          cart: payload,
          isLoading: false,
        };
      }
      case types.CART_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
    default:
      return state;
  }
};
