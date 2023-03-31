import { FaBars, FaTimes, FaGoogle, FaHouseUser } from "react-icons/fa";
import { useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BsCalendar2Range } from "react-icons/bs";

function Navbar() {
  const navRef = useRef();
  const { isAuthenticated, handleLogout, handleLogin, handleRegister } =
    useContext(UserContext);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>
        Plan<span className="navbar-it-span">IT</span>
      </h1>
      <nav ref={navRef}>
        <a href="/">
          <FaHouseUser className="mb-2 mr-1" />
          Home
        </a>
        {isAuthenticated && (
          <a href="/profile">
            <CgProfile className="mb-2 mr-1" />
            Profile
          </a>
        )}
        {isAuthenticated && (
          <a href="/generate-calendar">
            <BsCalendar2Range className="mb-2 mr-2" />
            Create Your Study Calendar
          </a>
        )}
        <a href="/about">
          <FcAbout className="mb-2 mr-1" />
          About
        </a>
        {isAuthenticated ? (
          <button className="nav-btn-auth" onClick={handleLogout}>
            <FiLogOut className="mb-1" />
            Logout
          </button>
        ) : (
          <>
            <button className="nav-btn-auth" onClick={handleLogin}>
              <FaGoogle className="mb-2 mr-1" />
              Login
            </button>
            <button className="nav-btn-auth-register" onClick={handleRegister}>
              <FaGoogle className="mb-2 mr-1" />
              Register
            </button>
          </>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
