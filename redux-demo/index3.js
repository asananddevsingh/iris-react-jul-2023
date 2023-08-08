// const redux = require("redux");
import redux from "redux";

// state
// action (object {type: "TYPE_NAME", paylod?: ""})
// reducer (pure function)

//==========
// Like (+, -) & Dislike (+, -).

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
    case "DECREMENT_DISLIKE": {
      console.log("Inside Likes ::", state);
      return {
        ...state,
        likes: state.likes + 1,
      };
    }
    default:
      return state;
  }
};

//// DISLIKE FEATURE
const INCREMENT_DISLIKE = "INCREMENT_DISLIKE";
const DECREMENT_DISLIKE = "DECREMENT_DISLIKE";

const initialDislikesState = {
  dislikes: 5,
  name: "dislikes",
};

const dislikeReducer = (state = initialDislikesState, action) => {
  // console.log("state :>> ", state);
  switch (action.type) {
    case INCREMENT_DISLIKE:
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };
    case DECREMENT_DISLIKE:
      return {
        ...state,
        dislikes: state.dislikes - 1,
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
  setTimeout(() => {
    return {
      type: ADD_LIKES,
      addLikesCount: count,
    };
  }, 100);
};

//// Action creator for dislikes

//// Action creator.
const incrementDislike = () => {
  return {
    type: INCREMENT_DISLIKE,
  };
};

const decrementDislike = () => {
  return {
    type: DECREMENT_DISLIKE,
  };
};

//// Combine reducers
const rootReducer = redux.combineReducers({
  likesState: likeReducer,
  dislikeState: dislikeReducer,
});

//// create store/state.
const store = redux.createStore(rootReducer);

const actions = redux.bindActionCreators(
  { incrementLike, decrementLike, addLikes, incrementDislike, decrementDislike },
  store.dispatch
);

store.subscribe(() => {
  console.log("State ::", store.getState());
});

// actions.incrementLike();
// actions.incrementLike();
// actions.incrementDislike();
actions.decrementDislike();
