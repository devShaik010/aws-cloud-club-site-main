import "./NavBarStyles.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AWSCloudClubLogo from "../../assets/img/logo.png";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="navbar">
            <NavLink to="/" onClick={() => setClick(false)}>
                <img className="logo" src={AWSCloudClubLogo} alt="AWSCloudClubLogo" />
            </NavLink>
            
            <div className="navbar-menu-container">
                <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                    {/* Menu Items */}
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setClick(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setClick(false)}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setClick(false)}>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setClick(false)}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/board" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setClick(false)}>Board</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setClick(false)}>Gallery</NavLink>
                    </li>
                </ul>
            </div>

            <button className="join-now" onClick={() => alert('Join Now Clicked!')}>
                Join Now
            </button>

            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                )}
            </div>
        </div>
    );
}

export default NavBar;
