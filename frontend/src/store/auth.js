import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegun } from "./api";

const slice = createSlice({
  name: "auth",
  initialState: {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    authStarted: (auth, action) => {
      auth.loading = true;
    },

    authSuccess: (auth, action) => {
      localStorage.setItem("access", action.payload.access);

      auth.isAuthenticated = true;
      auth.access = action.payload.access;
      auth.refresh = action.payload.refresh;
      auth.loading = false;
      auth.error = null;
    },

    userLoaded: (auth, action) => {
      auth.user = action.payload;
      auth.loading = false;
    },

    userLoadingFailed: (auth, action) => {
      auth.user = null;
      auth.loading = false;
    },

    authFailed: (auth, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      auth.isAuthenticated = false;
      auth.access = null;
      auth.refresh = null;
      auth.error = action.payload;
      auth.loading = false;
    },
  },
});

const { authStarted, authSuccess, userLoaded, userLoadingFailed, authFailed } =
  slice.actions;
export default slice.reducer;

export const loadUser = () => (dispatch) => {
  const access = localStorage.getItem("access");

  if (access) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${access}`,
      Accept: "application/json",
    };

    dispatch(
      apiCallBegun({
        url: "/auth/users/me/",
        method: "GET",
        headers,
        onStart: authStarted.type,
        onSuccess: userLoaded.type,
        onError: userLoadingFailed.type,
      })
    );
  } else {
    dispatch(userLoadingFailed());
  }
};

export const login = (email, password) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({ email, password });

  await dispatch(
    apiCallBegun({
      url: "/auth/jwt/create/",
      method: "POST",
      data: body,
      headers,
      onStart: authStarted.type,
      onSuccess: authSuccess.type,
      onError: authFailed.type,
    })
  );

  dispatch(loadUser());
};
