import React from "react";
import useTravelContex from "../../Hook/useTravelContex";
import DateForm from "../DateFrom/DateForm";

function RightContent() {
  const { data, content } = useTravelContex();
  const curentActive = content.curentId;

  return (
    <div className="right-content">
      {content.showDate ? (
        <div>
          <DateForm />
        </div>
      ) : (
        <>
          {data.map((data, index) => (
            <div
              key={index}
              className={`img-wrap ${index === curentActive ? "active" : ""}`}
              onClick={() => index}
            >
              <img src={data.img} alt="" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default RightContent;
