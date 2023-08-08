import toolkit from "@reduxjs/toolkit";

// console.log("Hello Redux Toolkit.");

// sate
// action/action creators
// reducers
// store.
// dispatch

const likeSlice = toolkit.createSlice({
  name: "like",
  initialState: {
    count: 10,
    channel: "React JS",
  },
  reducers: {
    //// This state is a draft state.
    incrementLike: (state, action) => {
      // console.log("state", state);
      state.count++;
    },
  },
  // extraReducers: {
  //   ["dislike/incrementDislike"]: (state, action) => {
  //     console.log("State in like slice ::", state.count);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(dislikeSlice.actions.incrementDislike, (state, action) => {
      console.log("State ::", state.count);
    });
  },
});

/// "name/reducerProp" => "like/incrementLike"
// console.log("likeSlice :>> ", likeSlice);

const dislikeSlice = toolkit.createSlice({
  name: "dislike",
  initialState: {
    count: 5,
  },
  reducers: {
    //// This state is a draft state.
    incrementDislike: (state, action) => {
      // console.log("state", state);
      state.count++;
    },
  },
});

const store = toolkit.configureStore({
  reducer: {
    likes: likeSlice.reducer,
    dislikes: dislikeSlice.reducer,
  },
});

// console.log("store :>> ", store);

const unsubscribe = store.subscribe(() => {
  console.log("Subscriber ::", store.getState());
});

// //// Get the auto created actions from like slice.
const { incrementLike } = likeSlice.actions;
// store.dispatch(incrementLike());
// store.dispatch(incrementLike());

//// Get the auto created actions from like slice.
const { incrementDislike } = dislikeSlice.actions;
store.dispatch(incrementDislike());
store.dispatch(incrementDislike());
