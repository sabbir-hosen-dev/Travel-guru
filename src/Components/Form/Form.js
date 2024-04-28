/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: " ",
    password: "",
    confirmPassword : "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "last Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <div className="form-wrap">
      <form action="" onSubmit={handleSubmit}>
        <h3>Create An Acount</h3>
        <div className="input">
          <label htmlFor="first-name" className={`input-label `}>
            First Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            onChange={handleChange}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
        </div>
        <div className="input">
          <label htmlFor="last-name" className={`input-label`}>
            Last Name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>

        <div className="input">
          <label htmlFor="email" className={`input-label `}>
            Username or Email
          </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="input">
          <label htmlFor="password" className={`input-label`}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
           {errors.password&& <p style={{color:"red"}}>{errors.password}</p>}
        </div>

        <div className="input">
          <label htmlFor="confirm-password" className={`input-label `}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={handleChange}
          />
           {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword}</p>}
        </div>
        <div className="input">
          <button type="submit" className="btn w100">
            Start Booking
          </button>
        </div>
        <p>
          Alrady have an account? <a href="">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Form;
