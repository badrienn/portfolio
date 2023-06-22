import { NavLink } from "react-router-dom";
import "../css/components-css/navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar-top">
            <ul className="navbar-top-ul">
                <li><NavLink className={"navbar-top-navlink"} to="/">HOME</NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/pages/cv">CV</NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/pages/school-projects">SCHOOL PROJECTS</NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/pages/personal-projects">PERSONAL PROJECTS</NavLink></li>
            </ul>
        </nav>
    )
}