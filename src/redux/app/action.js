import * as types from "./actionType";
import axios from "axios";
export const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_LOADING });
  return axios
    .get(`https://json-server1122.herokuapp.com/prods`,params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_DATA_FAILURE });
    });
};


// ADDING DATA TO THE CART
export const postCartData = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_DATA_LOADING });
    axios
      .post(`https://json-server1122.herokuapp.com/bag`, payload)
      .then((res) => {
        dispatch({ type: types.ADD_DATA_SUCCESS, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: types.ADD_DATA_FAILURE });
      });
  };

  // CART DATA
export const getCartData = () => (dispatch) => {
    dispatch({ type: types.CART_DATA_LOADING });
    return axios
      .get(`https://json-server1122.herokuapp.com/bag`)
      .then((res) => {
        return dispatch({ type: types.CART_DATA_SUCCESS, payload: res.data });
      })
      .catch((e) => {
        return dispatch({ type: types.CART_DATA_FAILURE });
      });
  };