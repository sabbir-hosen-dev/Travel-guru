import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import "./Content.css";

import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import useTravelContex from "../../Hook/useTravelContex";

function Content() {
  const { handleNext, handlePrev, content } = useTravelContex();

  return (
    <section
      className="content-wrap"
      style={{ paddingRight: content.showDate ? "10%" : " " }}
    >
      <div className="content">
        <LeftContent />
        <RightContent />
      </div>
      {!content.showDate && (
        <div className="control-wrap">
          <AiOutlineLeft className="left-btn" onClick={() => handlePrev()} />
          <AiOutlineRight className="right-btn" onClick={() => handleNext()} />
        </div>
      )}
    </section>
  );
}

export default Content;
