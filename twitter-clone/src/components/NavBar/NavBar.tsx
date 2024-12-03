import React from "react";
import '../NavBar/NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/profile" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                    <a href="/settings" className="nav-link">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;