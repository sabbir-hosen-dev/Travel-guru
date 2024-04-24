/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-wrap">
      <form action="">
        <h3>Create An Acount</h3>
        <div className="input">
          <label htmlFor="first-name" className={`input-label `}>
            First Name
          </label>
          <input type="text" name="first-name" id="first-name" />
        </div>

        <div className="input">
          <label htmlFor="last-name" className={`input-label`}>
            Last Name
          </label>
          <input type="text" name="last-name" id="last-name" />
        </div>

        <div className="input">
          <label htmlFor="email" className={`input-label `}>
            Username or Email
          </label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="input">
          <label htmlFor="password" className={`input-label`}>
            Password
          </label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="input">
          <label htmlFor="confirm-password" className={`input-label `}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <div className="input">
          <button type="submit" className="btn w100">
            Start Booking
          </button>
        </div>
        <p>Alrady have an account? <a href="">Login</a></p>
      </form>
    </div>
  );
}

export default Form;
