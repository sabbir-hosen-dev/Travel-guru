import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg";
import data from "../../Data/Data.json";
import "./Content.css";

function Content() {
  return (
    <section className="content-wrap">
      <div className="content">
        <div className="left-content">
          <h1>SREEMANGAL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis
            perspiciatis natus dolor inventore, delectus aliquid eum iusto
            sapiente. Quo?
          </p>
          <div className="btn">
            Booking <CgArrowRight />
          </div>
        </div>
        <div className="right-content">
          <div className="img-wrap">
            {/* {data.map((data) => (
                <img src={data.img} alt="" />
            ))} */}
          </div>
        </div>
      </div>
      <div className="control-wrap">
        <AiOutlineLeft className="left-btn" />
        <AiOutlineRight className="right-btn" />
      </div>
    </section>
  );
}

export default Content;
