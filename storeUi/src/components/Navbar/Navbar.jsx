import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.style.css";
import { Link } from "react-router-dom"; 
import Lodo from "../../../assests/Logo.svg";


const Navbar = () => {
  return (
    <>
      <div className="black">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div className="navbar">
        <div className="logo">
          <FontAwesomeIcon
            icon={faBars}
            color="black"
            size="xl"
            className="navigationDrawer"
          />
          <div><img src={Lodo} alt=""></img></div>
        </div>
        <div className="brand-name">
          <h1>LOGO</h1>
        </div>
        <div className="search-options">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faHeart}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faUser}
            color="black"
            className="option-icons hide"
          />
          <select
            name="language-drop-down"
            id="language-drop-down"
            className="hide"
          >
            <option value="ENG">ENG</option>
            <option value="HIN">HIN</option>
          </select>
        </div>
      </div>
      <div className="lowerNavbar">
        <Link to="/shop" className="navLinks">
          SHOP
        </Link>
        <Link to="/skills" className="navLinks">
          SKILLS
        </Link>
        <Link to="/stories" className="navLinks">
          STORIES
        </Link>
        <Link to="/about" className="navLinks">
          ABOUT
        </Link>
        <Link to="/contact" className="navLinks">
          CONTACT US
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
