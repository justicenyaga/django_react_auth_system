import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset_password } from "../store/auth";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset_password(email));
    setRequestSent(true);
  };

  useEffect(() => {
    requestSent && navigate("/");
  }, [requestSent, navigate]);

  return (
    <div className="container mt-5">
      <h1>Request Password Reset</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="btn btn-primary  mt-3">
          Request Password Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
