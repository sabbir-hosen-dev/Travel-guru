import React from "react";
import useTravelContex from "../../Hook/useTravelContex";

function RightContent() {
  const { data, content,handleClick } = useTravelContex();
  const curentActive = content.curentId;

  return (
    <div className="right-content">
      {data.map((data, index) => (
        <div
          key={index}
          className={`img-wrap ${index === curentActive ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default RightContent;
