import axios from "axios";
import {
  RENTERS_LIST_REQUEST,
  RENTERS_LIST_SUCCESS,
  RENTERS_LIST_FAIL,
  RENTER_UPDATE_REQUEST,
  RENTER_UPDATE_SUCCESS,
  RENTER_UPDATE_FAIL,
  RENTER_DETAILS_REQUEST,
  RENTER_DETAILS_SUCCESS,
  RENTER_DETAILS_FAIL,

} from "../constants/apartmentConstants";

export const listRenters = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RENTERS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/apartment/renters/`, config);

    dispatch({
      type: RENTERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RENTERS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateRenter = (renter) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RENTER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/apartment/${renter.id}/update/`,
      renter,
      config
    );

    dispatch({
      type: RENTER_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({ type: RENTER_DETAILS_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: RENTER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getRenterDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RENTER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/apartment/${id}/`, config);

    dispatch({
      type: RENTER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RENTER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


