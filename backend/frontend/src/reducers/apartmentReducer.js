import {
  RENTERS_LIST_REQUEST,
  RENTERS_LIST_SUCCESS,
  RENTERS_LIST_FAIL,
  RENTER_UPDATE_REQUEST,
  RENTER_UPDATE_SUCCESS,
  RENTER_UPDATE_FAIL,
  RENTER_UPDATE_RESET,
  RENTER_DETAILS_REQUEST,
  RENTER_DETAILS_SUCCESS,
  RENTER_DETAILS_FAIL,
  RENTER_DETAILS_RESET,

} from "../constants/apartmentConstants";

export const renterListReducer = (state = { renter: [] }, action) => {
  switch (action.type) {
    case RENTERS_LIST_REQUEST:
      return { loading: true, renter: [] };

    case RENTERS_LIST_SUCCESS:
      return { loading: false, renter: action.payload };

    case RENTERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const renterUpdateReducer = (state = { renter: {} }, action) => {
  switch (action.type) {
    case RENTER_UPDATE_REQUEST:
      return { loading: true };

    case RENTER_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case RENTER_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case RENTER_UPDATE_RESET:
      return { renter: {} };

    default:
      return state;
  }
};

export const renterDetailsReducer = (state = { renter: {} }, action) => {
  switch (action.type) {
    case RENTER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case RENTER_DETAILS_SUCCESS:
      return { loading: false, renter: action.payload };

    case RENTER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case RENTER_DETAILS_RESET:
      return { renter: {} };

    default:
      return state;
  }
};
