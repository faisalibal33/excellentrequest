import { Link } from "react-router-dom";
import "./searchItem.css";
import pbc from "../../images/pbc.jpg"
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const SearchItem = ({item, handleClick}) => {

  return (
    <>   
      <div className="searchItem">
            <img src={pbc} alt="" className="siImg" />
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
                    <>
                      <span className="closeNote">
                        Work order has been finished
                      </span> 
                      <span className="siFeatures">Close {item?.closeDate}</span>
                      <span className="siFeatures">By {item?.closeBy}</span> 
                    </>
                  ) : ( 
                  <span className="progressNote">
                    Work order on progress execution
                  </span>   
                  )}
            </div>
            <div className="siDetails">
              <div className="siRating">
                <h3>{item?.aircraftReg}</h3>
                {/* <button>100</button> */}
              </div>
              <div className="siDetailTexts">
                { item?.progress === "OPEN"? ( 
                  <button className="openButton" onClick={handleClick}>OPEN</button> 
                  ) : item?.progress === "CLOSE" ? ( 
                    <>
                      <button className="closeButton" onClick={handleClick}>CLOSE</button> 
                    </>
                  ) : (
                    <>
                      <button className="progressButton" onClick={handleClick}>PROGRESS</button> 
                    </>
                  )}             
              </div>
            </div>
    </div>
    </>
  )
}

export default SearchItem;
