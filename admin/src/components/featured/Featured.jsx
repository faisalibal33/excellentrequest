import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/api/request");

  const widgetValue = () => {
    const open =  data.filter(datas=>datas.progress.toLowerCase().includes("open"))
    const close =  data.filter(datas=>datas.progress.toLowerCase().includes("close"))
    const progress =  data.filter(datas=>datas.progress.toLowerCase().includes("progress"))
    
    return {open, close, progress}
  }
  const {open, close, progress} = widgetValue(data);
  let percent = close.length / data.length * 100
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Progress Request Today</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={percent} text={`${percent.toFixed(2)}%`} strokeWidth={5} />
        </div>
        <p className="title">Total Request Close</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Open</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">{open.length} Request</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Progress</div>
            <div className="itemResult progress">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{progress.length} Request</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Close</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{close.length} Request</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
