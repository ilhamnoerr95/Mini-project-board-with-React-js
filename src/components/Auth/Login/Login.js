import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { submitLogin as login } from "redux/Auth/Auth";

import "./_login.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e, input) => {
    let value = e.target.value;
    setText({ ...text, [input]: value });
  };
  //   console.log("email", text.email, "password", text.password);

  const submitLogin = async (e) => {
    if (!text.email || !text.password) {
      e.preventDefault();
    } else {
      e.preventDefault();
      dispatch(login(text.email, text.password));
      setTimeout(() => {
        navigate("/todo");
      }, 1000);
    }
    return;
  };
  useEffect(() => {
    // dispatch(actionName(text.name));
  });

  return (
    <form id="form" className="needs-validation login" noValidate>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">
          Email
        </label>

        <div className="col-sm-8 input-group">
          <input
            type="text"
            className="form-control"
            id="staticEmail"
            onChange={(e) => handleLogin(e, "email")}
            value={text.email}
            required
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="validationCustomPassword"
          className="col-sm-4 col-form-label"
        >
          Password
        </label>
        <div className="col-sm-8 input-group">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            onChange={(e) => handleLogin(e, "password")}
            value={text.password}
            required
          />
        </div>
      </div>

      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary text-white"
          onClick={submitLogin}
        >
          LOGIN
        </button>
        <Link to="/register" className="mx-3">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
