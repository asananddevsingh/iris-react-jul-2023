import redux from "redux";

const INCREMENT_LIKE = "INCREMENT_LIKE";
const DECREMENT_LIKE = "DECREMENT_LIKE";
const ADD_LIKES = "ADD_LIKES";

const initialLikesState = {
  likes: 10,
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

const addLikes = (dispatch) => {
  setTimeout(() => {
    const count = 1000;
    dispatch({
      type: ADD_LIKES,
      addLikesCount: count,
    });
  }, 5000);
};

//// create store/state.
const store = redux.createStore(likeReducer);

console.log("store :>> ", store);
console.log("store.getState() :>> ", store.getState());

const actions = redux.bindActionCreators(
  { incrementLike, decrementLike, addLikes },
  store.dispatch
);

// const unsuscribe = store.subscribe(() => {
//   console.log("State ::", store.getState());
// });

// actions.incrementLike();
// actions.incrementLike();
// actions.decrementLike();

// addLikes(store.dispatch);
// unsuscribe();
