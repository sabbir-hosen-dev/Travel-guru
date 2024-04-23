import { CgArrowRight } from "react-icons/cg";
import React from "react";
import useTravelContex from "../../Hook/useTravelContex";

function LeftContent() {
  const {content,data} = useTravelContex();
  
  const {name,dec} = data[content.curentId]
  return (
    <div className="left-content">
      <h1>{name}</h1>
      <p>{dec}</p>
      <div className="btn">
        <div className="boking-btn">
          Booking <CgArrowRight />
        </div>
      </div>
    </div>
  );
}

export default LeftContent;
