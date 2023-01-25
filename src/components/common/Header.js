import { Link } from "react-router-dom";
import './common.module.css'

export const Header = () => {

return (
    <header className='header'>
        <div className="logo">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/logout">Logouts</Link></li>
                        <li><Link to="/createPay">Create Pay</Link></li>
                        <li><Link to="/historyPay">History Pay</Link></li>
                </ul>
            </nav>
            <span className="course">React Course - June 2022</span>
            <span className="description">User List Demo</span>
        </div>
    </header>
);
}