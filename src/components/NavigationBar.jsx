import './NavigationBar.css';
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import SideBar from './SideBar.jsx';
import { useState } from "react";
import LoginRegisterComponent from './LoginRegisterComponent.jsx'

function NavigationBar({loggedInStatus}){

        const [seen, setSeen] = useState(false)

        function togglePop () {
            setSeen(!seen);
        };

        const [sideBarStatus, setSideBarStatus] = useState(false)

        const toggleSidebar = () =>{
            setSideBarStatus(!sideBarStatus)
        }

        const loggedIn = ( 
                    <nav className = "nav-bar">
                        <div className = "nav-brand">
                            <Link to = "/secured">Retro Forest</Link>
                        </div>
                        <div className = "nav-links">
                            <Link to = "/secured" className = "home-link">HOME</Link>
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
                            <Link   to="#" 
                                    className="login-register-link" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        togglePop();
                                    }}>
                                LOG IN <FiLogIn />
                            </Link>
                        </div>
                    </nav>)

    return(
    
        <>
            {loggedInStatus ? loggedIn : loggedOut}
            <div>
                {seen ? <LoginRegisterComponent toggle={togglePop}/> : null}
            </div>
        </>
       
    )
}
export default NavigationBar