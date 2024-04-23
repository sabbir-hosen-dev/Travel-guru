import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";


import "./Content.css";

import LeftContent from './LeftContent';
import RightContent from "./RightContent";
import useTravelContex from "../../Hook/useTravelContex";


function Content() {

  const {handleNext,handlePrev} = useTravelContex()

  return (
    <section className="content-wrap">
      <div className="content">
        <LeftContent />
        <RightContent />
      </div>
      <div className="control-wrap">
        <AiOutlineLeft className="left-btn" onClick={() => handlePrev()} />
        <AiOutlineRight className="right-btn" onClick={() => handleNext()} />
      </div>
    </section>
  );
}

export default Content;
