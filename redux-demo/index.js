// const redux = require("redux");
import redux from "redux";

console.log("Hello Redux");

//// state
//// action (object {type: "TYPE_NAME", paylod?: ""})
//// reducer (pure function)

////==========
//// Like (+, -) & Dislike (+, -).

const INCREMENT_LIKE = "INCREMENT_LIKE";
const DECREMENT_LIKE = "DECREMENT_LIKE";
const ADD_LIKES = "ADD_LIKES";

const initialLikesState = {
  likes: 0,
  name: "likes",
};

const likeReducer = (state = initialLikesState, action) => {
  switch (action.type) {
    case INCREMENT_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case DECREMENT_LIKE:
      return {
        ...state,
        likes: state.likes - 1,
      };
    case ADD_LIKES:
      return {
        ...state,
        likes: state.likes + action.addLikesCount,
      };
    default:
      return state;
  }
};

//// Action
// const action = {
//   type: INCREMENT_LIKE,
// };

//// Action creator.
const incrementLike = () => {
  return {
    type: INCREMENT_LIKE,
  };
};

const decrementLike = () => {
  return {
    type: DECREMENT_LIKE,
  };
};

const addLikes = (count) => {
  return {
    type: ADD_LIKES,
    addLikesCount: count,
  };
};

//// create store/state.

const store = redux.createStore(likeReducer);

// console.log("Store ::", store);
// console.log("Initial State ::", store.getState());
// console.log("After Increment ::", store.getState());

// store.dispatch(incrementLike());
// store.dispatch(incrementLike());

store.subscribe((myState) => {
  // console.log("myState :>> ", myState); // This would be undefined.
  console.log("Subscription 1 ::", store.getState());
});

const unsubscribe2 = store.subscribe(() => {
  console.log("Subscription 2 ::", store.getState());
});

store.dispatch(incrementLike());
store.dispatch(incrementLike());
console.log("========== :>> ");
unsubscribe2();

// store.dispatch(decrementLike());
// store.dispatch(decrementLike());

const actions = redux.bindActionCreators(
  { incrementLike, decrementLike, addLikes },
  store.dispatch
);

actions.incrementLike();
actions.decrementLike();
actions.decrementLike();

actions.addLikes(100);
