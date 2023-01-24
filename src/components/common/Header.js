import { Link } from "react-router-dom";

export const Header = () => {

return (
    <header className="header">
        <div className="logo">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <span className="course">React Course - June 2022</span>
            <span className="description">User List Demo</span>
        </div>
    </header>
);
}