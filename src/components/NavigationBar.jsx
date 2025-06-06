import './NavigationBar.css';
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import SideBar from './SideBar.jsx';
import { useState } from "react";

function NavigationBar({loggedInStatus}){

        const [sideBarStatus, setSideBarStatus] = useState(false)

        const toggleSidebar = () =>{
            setSideBarStatus(!sideBarStatus)
        }

        const loggedIn = ( 
                    <nav className = "nav-bar">
                        <div className = "nav-brand">
                            <Link to = "/">Retro Forest</Link>
                        </div>
                        <div className = "nav-links">
                            <Link to = "/" className = "home-link">HOME</Link>
                            <Link to = "/secured/followed" className = "followed-link">FOLLOWED PROJECTS</Link>
                            <Link to = "/secured/myProjects" className = "my-projects-link">MY PROJECTS</Link>
                            <button className="sidebar-btn" onClick={toggleSidebar}><IoMenu /></button>
                        </div>
                        {sideBarStatus && <SideBar/>}
                    </nav>)

        const loggedOut = ( 
                    <nav className = "nav-bar">
                        <div className = "nav-brand">
                            <Link to = "/">Retro Forest</Link>
                        </div>
                        <div className = "nav-links">
                            <Link to = "/" className = "home-link">HOME</Link>
                            <Link to = "/secured/following" className = "login-register-link">LOG IN <FiLogIn /></Link>
                        </div>
                    </nav>)


    return(
       loggedInStatus ? loggedIn : loggedOut
    )
}
export default NavigationBar