import axios from "axios";

import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
    }
    const { url, method, onStart, params, onSuccess, onError } = action.payload;

    onStart && dispatch({ type: onStart });
    next(action);

    const options = {
      method: method,
      url: url,
      params: params,
      headers: {
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        "X-RapidAPI-Key": "91c56bff46msha70642b4be2f89fp1d85c2jsn2f65c23ca322",
      },
    };

    try {
      const response = await axios.request(options);

      dispatch(actions.apiCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response });
    } catch (error) {
      // dispatch();
      dispatch(actions.apiCallFailed(error.message));
      if (onError)
        dispatch({
          type: onError,
          payload: error.message,
        });
    }
  };

export default api;
