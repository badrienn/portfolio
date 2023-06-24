import { NavLink } from "react-router-dom";
import { HiMenu } from 'react-icons/hi'
import "../css/components-css/navbar.css"
import { useState } from "react";

export default function Navbar(){
    const [isExpanded, setIsExpanded] = useState(false)

    return(
        <nav className="navbar-top">
            <button className="burger-btn" onClick={() => setIsExpanded(!isExpanded)}><HiMenu/></button>
            <ul className={isExpanded ? "navbar-top-ul expanded-nav" : "navbar-top-ul"}>
                <li><NavLink className={"navbar-top-navlink"} to="/"><span>HOME</span></NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/pages/cv"><span>RESUMÉ</span></NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/pages/school-projects"><span>SCHOOL PROJECTS</span></NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/pages/personal-projects"><span>PERSONAL PROJECTS</span></NavLink></li>
            </ul>
        </nav>
    )
}