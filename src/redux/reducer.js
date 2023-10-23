import * as types from "./actionType";

const initialstate = {
  data: [],
  isError: false,
  isLoading: false,
  singleImage: null
};

const reducer = (oldState = initialstate, action) => {
  let { type, payload } = action;
  switch (type) {
    case types.REQUEST_GET:
      return { ...oldState, isLoading: true, isError: false  };
    case types.REQUEST_SUCCESS:
      return { ...oldState, isLoading: false, data: payload };
    case types.REQUEST_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    case types.SINGLE_IMAGE_REQUEST_GET:
      return { ...oldState, isLoading: true, isError: false, singleImage: null  };
    case types.SINGLE_IMAGE_REQUEST_SUCCESS:
      // console.log(payload)
      return { ...oldState, isLoading: false, singleImage: payload };
    case types.SINGLE_IMAGE_REQUEST_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    default:
      return oldState;
  }
};

export { reducer };
