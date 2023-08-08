import redux, { applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
// const thunk = require("redux-thunk").default

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const FETCHING_DATA = "FETCHING_DATA";
const FETCH_SUCCEEDED = "FETCH_SUCCEEDED";
const FETCH_FAILED = "FETCH_FAILED";

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        loading: true,
        data: [],
        error: "",
      };
    case FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  };
};
const fetchSucceeded = (payload) => {
  return {
    type: FETCH_SUCCEEDED,
    payload,
  };
};
const fetchFailed = (payload) => {
  return {
    type: FETCH_FAILED,
    payload,
  };
};

const store = redux.createStore(dataReducer, applyMiddleware(thunk.default));

// console.log("store :>> ", store);

const unsubscribe = store.subscribe(() => {
  console.log("Subscription 1 ::", store.getState());
});

const asyncFetchData = () => {
  // we are returning a thunk function from here.
  return (dispatch, state) => {
    // console.log('state :>> ', state);
    dispatch(fetchingData());
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      // .get("http://jsonplaceholder.typicode.com/todoskjkj") //// To see the error scenario.
      .then((response) => {
        const dataChunk = response.data.slice(0, 4);
        dispatch(fetchSucceeded(dataChunk));
      })
      .catch((error) => {
        dispatch(fetchFailed(error.message));
      });
  };
};

store.dispatch(asyncFetchData());
unsubscribe();
