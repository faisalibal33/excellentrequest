import "./navbar.css";
import gmflogo from "../../images/GMFaeroasia.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import profileImage from "../../images/faisal.jpg" 
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <img src={gmflogo} alt="GMF-Aeroasia" className="gmflogo"/>
        </Link>
        {user ? <div className="profile">
          {user.name}
          <img src={profileImage} alt="Profile Image" className="profileimg"/>
        </div> : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
