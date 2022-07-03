import { Link } from "react-router-dom";
import "./searchItem.css";
import pbc from "../../images/pbc.jpg"

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      {item?.progress === "CLOSE" ?  (
          <div className="imgAndclose">
            <img src={pbc} alt="" className="siImg" />
            <div className="closeby">
              <span className="closedate">Close {item?.closeDate}</span>
              <span className="closedate">By {item?.closeBy}</span>  
            </div>
          </div> ) : (
            <img src={pbc} alt="" className="siImg" />
          )
      }
            <div className="siDesc">
              <h1 className="siTitle">{item?.equipment}</h1>
              <div className="orderNumber">
                <span className="sinumber">Order Number</span>
                <span className="siDistance">{item?.orderNo}</span>
              </div>
              <span className="siTaxiOp">{item?.requestBy} - {item?.idNumber} - {item?.unit}</span>
              <span className="siSubtitle">
                {item?.remark}
              </span>
              <span className="siFeatures">Request date {item?.requestDate}</span>
              { item?.progress === "OPEN" ? ( 
                  <span className="openNote">
                    Work order waiting for excecution
                  </span>       
                  ) : item?.progress === "CLOSE" ? ( 
                    <span className="closeNote">
                      Work order has been finished
                    </span>
                  ) : ( 
                  <span className="progressNote">
                    Work order on progress execution
                  </span>   
                  )}
            </div>
            <div className="siDetails">
              <div className="siRating">
                <h3>{item?.aircraftReg}</h3>
              </div>
              <div className="siDetailTexts">
                { item?.progress === "OPEN" ? ( 
                  <button className="openButton">OPEN</button> 
                  ) : item?.progress === "CLOSE" ? ( 
                    <button className="closeButton">CLOSE</button> 
                  ) : (<button className="progressButton">PROGRESS</button> )}
              </div>
            </div>
    </div>
  );
};

export default SearchItem;
