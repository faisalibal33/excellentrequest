import useFetch from "../../hooks/useFetch";
import "./featured.css";
import pbc from "../../images/pbc.jpg"
import awt from "../../images/awt.jpg"
import maincar from "../../images/maincar.jpg"
import maintruck from "../../images/maintruck.jpg"
import gpu from "../../images/gpu.jpg"
import lavatory from "../../images/lavatory.jpg"
import waterservicing from "../../images/waterservicing.jpg"
import portablewater from "../../images/portablewater.jpg"
import fueltruck from "../../images/fueltruck.jpg"
import kato from "../../images/kato.jpg"
import boomlift from "../../images/boomlift.jpg"
import { useState } from "react";



const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  const [active, setActive] = useState(true)

  return (
    <>
    <h2 id="equipment">Support Equiment</h2>
    <div className="featured">
      {active ? (
        <>
        <div className="featuredItem">
          <img
            src={pbc}
            alt=""
            className="featuredImg"
            />
          <div className="featuredTitles">
            <h1>Pushback Car</h1>
            <h2>{data[0]} Available</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src={awt}
            alt=""
            className="featuredImg"
            />
          <div className="featuredTitles">
            <h1>Aircraft Washing Truck</h1>
            <h2>{data[1]} Available</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src={maincar}
            alt=""
            className="featuredImg"
            />
          <div className="featuredTitles">
            <h1>Main Car</h1>
            <h2>{data[2]} Available</h2>
          </div>
        </div>
        <span className="more" onClick={() => setActive(false)}>More Equipment</span>
        </>
      ) : (
        <>
          <div className="featuredItem">
            <img
              src={pbc}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Pushback Car</h1>
              <h2>{data[0]} Available</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src={awt}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Aircraft Washing Truck</h1>
              <h2>{data[1]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={maincar}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Main Car</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={maintruck}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Main Truck</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={gpu}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>GPU</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={lavatory}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Lavatory Servicing</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={waterservicing}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Water Servicing</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={portablewater}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Portable Water</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={fueltruck}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Fuel Truck</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={kato}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Kato</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={boomlift}
              alt=""
              className="featuredImg"
              />
            <div className="featuredTitles">
              <h1>Boomlift</h1>
              <h2>{data[2]} Available</h2>
            </div>
          </div>
          <a href="#equipment" style={{ color: "inherit", textDecoration: "none" }}className="more" onClick={() => setActive(true)}>More Equipment</a>
        </>
      )}
    </div>
    </>
  );
};

export default Featured;
