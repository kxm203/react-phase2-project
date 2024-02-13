import { NavLink } from "react-router-dom";
import "../App.css";


function NavBar () {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className="nav-link"
            >
               Main
            </NavLink>
            <NavLink
                to="/menu"
                className="nav-link"
            >
                Menu
            </NavLink> 
            <NavLink
                to="/newmenuitem"
               className="nav-link"
            >
                NewMenuItem
            </NavLink>
        </nav>
    );
};
export default NavBar
