import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset_password_confirm } from "../store/auth";

const ResetPasswordConfirmPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uid, token } = useParams();

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
    setRequestSent(true);
  };

  useEffect(() => {
    requestSent && navigate("/");
  }, [requestSent, navigate]);

  return (
    <div className="container mt-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="new_password">New Password</label>
          <input
            type="password"
            name="new_password"
            value={new_password}
            onChange={handleOnChange}
            className="form-control"
            id="new_password"
            placeholder="New Password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="re_new_password">Confirm New Password</label>
          <input
            type="password"
            name="re_new_password"
            value={re_new_password}
            onChange={handleOnChange}
            className="form-control"
            id="re_new_password"
            placeholder="Confirm New Password"
          />
        </div>
        <button type="submit" className="btn btn-primary  mt-3">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordConfirmPage;
