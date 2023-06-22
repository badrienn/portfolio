import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/pages-css/layout.css"

export default function Layout(){
    return(
        <div className="all-container">
            <header className="header">
                <Navbar />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                
            </footer>
        </div>
    )
}