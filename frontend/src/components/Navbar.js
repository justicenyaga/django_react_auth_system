import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

import {
  checkAuthenticated,
  loadUser,
  logout,
  googleAuthenticate,
} from "../store/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  let location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    if (state && code) {
      !isAuthenticated && dispatch(googleAuthenticate(state, code));
      if (isAuthenticated) {
        window.history.replaceState(null, null, window.location.pathname);
        dispatch(loadUser());
      }
    } else {
      dispatch(checkAuthenticated());
      if (isAuthenticated) {
        dispatch(loadUser());
      }
    }
  }, [dispatch, isAuthenticated, location.search]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Auth System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {isAuthenticated ? (
              <li>
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
