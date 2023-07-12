import 'react';
import './Header.css';
import navLogo from '../../Media/logo/logo3.png'

const Header = () => {
    return (
        <header className="header">
            <div className='navRaper'>
                <nav className="nav">
                    <div className="nav-logo">
                        <img src={navLogo} alt="Logo" />
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">Shop</li>
                        <li className="nav-item">Orders</li>
                        <li className="nav-item">Inventory</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Support</li>
                        <li className="nav-item">Account</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;