import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { verify } from "../store/auth";

const ActivateAccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { uid, token } = useParams();

  const [verified, setVerified] = useState(false);

  const handleVerifyAccount = () => {
    dispatch(verify(uid, token));
    setVerified(true);
  };

  useEffect(() => {
    verified && navigate("/");
  }, [verified, navigate]);

  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "200px" }}
      >
        <h1>Activate your account</h1>
        <button
          onClick={handleVerifyAccount}
          style={{ marginTop: "50px" }}
          type="button"
          className="btn btn-primary"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default ActivateAccountPage;
