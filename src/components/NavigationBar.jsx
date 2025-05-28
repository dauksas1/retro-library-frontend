import { Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi";

function NavigationBar({loggedInStatus}){

        const loggedIn = ( <nav className = "nav-bar">
                    <div className = "nav-brand">
                        <Link to = "/">Retro Forest</Link>
                    </div>
                    <div className = "nav-links">
                        <Link to = "/" className = "home-link">Home</Link>
                        <Link to = "/following" className = "followed-link">Followed Projects</Link>
                    </div>
                </nav>)

        const loggedOut = ( <nav className = "nav-bar">
                    <div className = "nav-brand">
                        <Link to = "/">Retro Forest</Link>
                    </div>
                    <div className = "nav-links">
                        <Link to = "/" className = "home-link">Home</Link>
                        <Link to = "/following" className = "login-register-link">Log In <FiLogIn /></Link>
                    </div>
                </nav>)


    return(
       loggedInStatus ? loggedIn : loggedOut
    )
}
export default NavigationBar