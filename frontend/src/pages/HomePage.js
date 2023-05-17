import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Welcome to Auth System!</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          This is an incredible auth system with production level features!
        </p>

        {!isAuthenticated && (
          <>
            <p>
              Click Sign In to login to your account or Sign Up to create a new
              account.
            </p>

            <div className="d-inline-flex gap-2 mb-5">
              <Link
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                to="/login"
              >
                Sign In
              </Link>
              <Link
                className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
