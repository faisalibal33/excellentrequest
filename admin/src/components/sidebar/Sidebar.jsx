import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import gmflogo from "../../images/GMFaeroasia.png"

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      {darkMode ? (
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={gmflogo} alt="GMF-Aeroasia" className="gmflogo"/>
        </Link>
        </div>
      ) : (
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src="https://3.bp.blogspot.com/-Q19VtQTNMqg/XIyjxnXQ3rI/AAAAAAAASKY/xkUqkWsVcSEr5l_w2kYaoUS-WqrNUuR1ACLcBGAs/s280/GMF%2BAero%2BAsia.png" alt="GMF-Aeroasia" className="gmflogo"/>
        </Link>
        </div>
        )}
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Database</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Personil</span>
            </li>
          </Link>
          <Link to="/worktodo" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Work to do</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>All Request</span>
            </li>
          </Link>
          <p className="title">Equipment</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Manage Equipmentf</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Add Equipment</span>
          </li>
          {/* <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
