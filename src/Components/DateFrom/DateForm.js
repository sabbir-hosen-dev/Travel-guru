import React from "react";
import "./DateFrom.css";

function DateForm() {
  return (
    <div className="date-from-wrap">
      <form action="">
        <div className="input">
          <label htmlFor="orgin">Orgin</label>
          <input type="text" name="orgin" id="orgin" required />
        </div>
        <div className="input">
          <label htmlFor="disti">Distinitation</label>
          <input type="text" name="disti" id="didti" required />
        </div>
        <div className="date-wrap">
          <div className="input">
            <label htmlFor="from">Form</label>
            <input type="date" name="from" id="from" />
          </div>
          <div className="input">
            <label htmlFor="To">To</label>
            <input type="date" name="To" id="To" />
          </div>
        </div>
        <div className="input">
        <button type="submit" className="btn w100">
          Start Booking
        </button>
        </div>
      </form>
    </div>
  );
}

export default DateForm;
