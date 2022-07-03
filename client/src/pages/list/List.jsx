import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import pbc from "../../images/pbc.jpg"

const List = () => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/api/request");
  const [modalOpen, setModalOpen] = useState(false);
  const [requestValue, setRequestValue] = useState({
    aircraftReg: undefined,
    equipment: "Pushback Car",
    closeBy: "",
    closeDate: "",
    idNumber: undefined,
    remark: undefined,
    requestBy: undefined,
    unit: undefined
  });
  
  const handleChange = (e) => {
    const today = new Date().toLocaleString()
    const orderNo = data[0]?.orderNo + 1
    setRequestValue((prev) => ({ ...prev, [e.target.id]: e.target.value, orderNo: orderNo, requestDate: today }));   
    console.log(orderNo)
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/request", requestValue);
      reFetch();
      setModalOpen(false)
    } catch (err) {
      console.log("error cuk")
    }
  };
 
  return (
    <div>
      {modalOpen && <div className="modalBackground">
      <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Are your request correct?</h1>
          </div>
          <div className="modalRequest">
            <img src={pbc} alt="" className="siImg" />
            <div className="siDesc">
              <h1 className="siTitle">{requestValue.equipment}</h1>
              <span className="siTaxiOp">{requestValue.requestBy} - {requestValue.idNumber} - {requestValue.unit}</span>
              <span className="siSubtitle">
                {requestValue.remark}
              </span>
            </div>
            <div className="siDetails">
              <div className="siRating">
                <h3>{requestValue.aircraftReg}</h3>
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={handleClick}>Continue</button>
          </div>
        </div>
      </div>}
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">GSE Request</h1>
            <div className="lsItem">
              <h5>Aircraft Registration</h5>
              <input placeholder="Registration" id="aircraftReg" type="text" onChange={handleChange}/>
              <div className="dataform">
                <div className="lsItem">
                  <h5>Request By</h5>
                  <input placeholder="Name" id="requestBy" type="text" onChange={handleChange} />
                </div>
                <div className="lsItem">
                  <h5>ID Number</h5>
                  <input placeholder="ID" id="idNumber" type="text" onChange={handleChange} />
                </div>
                <div className="lsItem unitItem">
                  <h5>Unit</h5>
                  <input placeholder="Unit" id="unit" type="text" onChange={handleChange} />
                </div>
              </div>
            <h5>Equipment Request</h5>
            <select id="equipment" onChange={handleChange}>
              <option value="Pushback Car">Pushback Car</option>
              <option value="Aircraft Washing Truck">Aircraft Washing Truck</option>
              <option value="Main Car">Main Car</option>
              <option value="Main Truck">Main Truck</option>
              <option value="GPU">GPU</option>
              <option value="Lavatory Servicing">Lavatory Servicing</option>
              <option value="Water Servicing">Water Servicing</option>
              <option value="Portable Water">Portable Water</option>
              <option value="Fuel Truck">Fuel Truck</option>
              <option value="Kato">Kato</option>
              <option value="Boom Lift">Boom Lift</option>
            </select>
            <h5>Remark</h5>
            <textarea rows="5" placeholder="Remark" id="remark" type="text" onChange={handleChange} className="remark" />
            </div>
            <button onClick={() => setModalOpen(true)}>Request</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.sort((a, b) => b.createdAt > a.createdAt? 1 : -1).map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
