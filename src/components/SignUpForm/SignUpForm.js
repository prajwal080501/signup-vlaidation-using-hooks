import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Validation from "../Validation/Validation";

import React, { useState, useEffect } from "react";
import "./SignUpForm.css";

export const SignUpForm = ({submitForm}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dataCorrect, setDataCorrect] = useState(false)
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataCorrect) {
      submitForm(true);
    }
  }, [errors])
  return (
    <div className="container">
      <div className="signup-box">
        <h2 className="signup-heading">Create Account</h2>
        <form className="form">
          <div className="name">
            <label className="label">E-mail</label>
            <TextField
              value={values.email}
              type="email"
              name="email"
              className="input"
              placeholder="E-mail"
              onChange={handleChange}
            ></TextField>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="name">
            <label className="label">Password</label>
            <TextField
              value={values.password}
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              onChange={handleChange}
            ></TextField>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <Button
            onClick={handleSubmit}
            variant="contained"
            style={{ marginTop: "45px" }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
