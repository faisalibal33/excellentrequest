import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

const Widget = ({ type }) => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/api/request");

  const widgetValue = () => {
    const open =  data.filter(datas=>datas.progress.toLowerCase().includes("open"))
    const close =  data.filter(datas=>datas.progress.toLowerCase().includes("close"))
    const progress =  data.filter(datas=>datas.progress.toLowerCase().includes("progress"))
    
    return {open, close, progress}
  }
  const {open, close, progress} = widgetValue(data);

  let widget;


  switch (type) {
    // case "user":
    case "request":
      widget = {
        title: "TOTAL REQUEST",
        isMoney: false,
        link: "See all request",
        amount: data.length,
        background: "widget blue"
      };
      break;
    // case "order":
    case "open":
      widget = {
        title: "OPEN",
        isMoney: false,
        link: "View all open work",
        amount: open.length,
        background: "widget red"
      };
      break;
    // case "earning":
    case "close":
      widget = {
        title: "CLOSE",
        isMoney: false,
        link: "View all close work",
        amount: close.length,
        background: "widget green"
      };
      break;
    // case "balance":
    case "progress":
      widget = {
        title: "PROGRESS",
        isMoney: false,
        link: "view all progress work",
        amount: progress.length,
        background: "widget yellow"
      };
      break;
    default:
      break;
  }

  return (
    <div className={widget.background}>
      <div className="left">
        <span className="title">{widget.title}</span>
        <span className="counter">
          {/* {widget.isMoney && "$"}  */}
          {widget.amount}
        </span>
        <span className="link">{widget.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
        </div> 
      </div>
    </div>
  );
};

export default Widget;
