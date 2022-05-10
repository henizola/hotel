import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    searchString: "Addis Ababa",
    loading: false,
  },

  reducers: {
    hotelsRequested: (hotels, action) => {
      hotels.loading = true;
    },
    hotelsRequestFailed: (hotels, action) => {
      hotels.loading = false;
    },
    hotelsRecived: (hotels, action) => {
      hotels.list = action.payload.data;
      hotels.loading = false;
    },
    searchStringChanged: (hotels, action) => {
      hotels.searchString = action.payload;
    },
  },
});

const { hotelsRecived, hotelsRequested, hotelsRequestFailed } = slice.actions;
export default slice.reducer;

//action creattors
const url = "https://hotels4.p.rapidapi.com/locations/v2/search";

export const loadHotels = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url,
      method: "GET",
      params: {
        query: getState().hotels.searchString,
        locale: "en_US",
        currency: "ETB",
      },
      onStart: hotelsRequested.type,
      onError: hotelsRequestFailed.type,
      onSuccess: hotelsRecived.type,
    })
  );
};

export const changeString = (dispatch, getState, data) => {
  console.log(data, "data");
};

export const onSearch = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url,
      method: "GET",
      params: { query: "", locale: "en_US", currency: "ETB" },
      onStart: hotelsRequested.type,
      onError: hotelsRequestFailed.type,
      onSuccess: hotelsRecived.type,
    })
  );
};

export const getUnresolvedHotels = createSelector(
  (state) => state.hotels.hotels,
  (hotels) => hotels.filter((hotel) => !hotel.resolved)
);

export const getSpecificHotels = (group) =>
  createSelector(
    (state) => state.hotels.hotels,
    (hotels) => hotels.filter((hotel) => hotel.group === group)
  );
