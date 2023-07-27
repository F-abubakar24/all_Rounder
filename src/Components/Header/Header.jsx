import "react";
import "./Header.css";
import navLogo from "../../Media/logo/logo3.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="navRaper">
                <nav className="nav">
                    <div className="nav-logo">
                        <img src={navLogo} alt="Logo" />
                    </div>
                    <ul className="nav-list">
                        <NavLink to="/shop" className="nav-item">
                            Shop
                        </NavLink>
                        <NavLink to="/orders" className="nav-item">
                            Orders
                        </NavLink>
                        <NavLink to="inventory" className="nav-item">
                            Inventory
                        </NavLink>
                        <NavLink to="/about" className="nav-item">
                            About
                        </NavLink>
                        <NavLink to="/support" className="nav-item">
                            Support
                        </NavLink>
                        <NavLink to="/account" className="nav-item">
                            Account
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
