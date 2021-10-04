import React, { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignUpSuccess from "../SignupSucces/SignUpSuccess";

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitForm = () => {
    setFormSubmitted(true);
  };
  return (
    <div>
      {!formSubmitted ? (
        <SignUpForm submitForm={submitForm} />
      ) : (
        <SignUpSuccess />
      )}
    </div>
  );
};

export default Form;
