import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { submitRegister as register } from "redux/Auth/Auth";

function Register() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState({
    nama: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleRegister = (e, input) => {
    let value = e.target.value;
    setText({ ...text, [input]: value });
  };
  //   console.log({ ...text });
  const submitRegister = (e) => {
    // var invalid = document.querySelectorAll(".invalid");

    if (!text.nama || !text.email || !text.password) {
      e.preventDefault();
    } else {
      dispatch(register(text.nama, text.email, text.password, text.confirm));

      navigate("/todo");
    }
  };

  return (
    <>
      <nav>
        <Link to="/" className="mx-3 my-3">
          Back
        </Link>
      </nav>
      <form id="form" className="needs-validation login" noValidate>
        {/* NAMA */}
        <div className="mb-3 row">
          <label htmlFor="staticName" className=" col-sm-4 col-form-label">
            Nama
          </label>

          <div className=" col-sm-8 input-group">
            <input
              type="text"
              className="form-control"
              id="staticName"
              onChange={(e) => handleRegister(e, "nama")}
              value={text.nama}
              required
            />
            <div className="invalid-feedback">Please choose a name.</div>
          </div>
        </div>
        {/* EMAIL */}
        <div className="mb-3row">
          <label htmlFor="staticEmail" className="col-sm-4 col-form-label">
            Email
          </label>

          <div className="col-sm-8 input-group">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              onChange={(e) => handleRegister(e, "email")}
              value={text.email}
              required
            />
            <div className="invalid-feedback">Please choose a email.</div>
          </div>
        </div>
        {/* PASSWORD */}
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
              onChange={(e) => handleRegister(e, "password")}
              value={text.password}
              required
            />
            <div className="invalid-feedback">Please input your password.</div>
          </div>
        </div>
        {/* CONFIRM PASSWORD */}
        {/* <div className="mb-3 row">
          <label
            htmlFor="validationCustomConfirm"
            className="col-sm-5 col-form-label"
          >
            Confirm Password
          </label>
          <div className="col-sm-7 input-group">
            <input
              type="password"
              className="form-control"
              id="inputConfirm"
              onChange={(e) => handleRegister(e, "confirm")}
              value={text.confirm}
              required
            />
          </div>
        </div> */}
        {/* BUTTON SUBMIT */}
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary text-white"
            onClick={submitRegister}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
