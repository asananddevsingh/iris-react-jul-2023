import toolkit from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
  message: "Hello Guest",
};

const fetchUsers = toolkit.createAsyncThunk("user/fetch", (params, thunkApi) => {
  console.log("params in thunk :>> ", params);
  console.log("thunkApi :>> ", thunkApi.getState());

  return axios.get("http://jsonplaceholder.typicode.com/todos").then((response) => {
    thunkApi.dispatch({ type: "user/greet" });
    // return thunkApi.fulfillWithValue("Cutom Data");
    // return thunkApi.rejectWithValue("Custom Error");
    return response.data.slice(0, 4);
  });
  // .catch((error) => {
  //   // throw error.message;
  //   // return error.message;
  // });
});

// console.log("fetchUsers :>> ", fetchUsers);

const userSlice = toolkit.createSlice({
  name: "user",
  initialState,
  reducers: {
    greet: (state) => {
      state.message = "Welcome Users";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("action :>> ", action);
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      // state.error = action.payload;
    });
  },
});

const store = toolkit.configureStore({
  reducer: userSlice.reducer,
});

// console.log("store :>> ", store);

// console.log("Initial State :>> ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Subscriber ::", store.getState());
});

store.dispatch(fetchUsers({ id: 10 }));

//// API(userName, password) => get back userId, role => API(userId, role) => userDetails.
